import {
	DiscordActivityTypes,
	DiscordenoGuild,
	DiscordenoMessage,
	editBotNickname,
	editBotStatus,
	// Log4Deno deps
	initLog,
	Intents,
	log,
	LT,
	sendMessage,
	// Discordeno deps
	startBot,
} from './deps.ts';

import { constantCmds } from './src/constantCmds.ts';
import data from './src/data.ts';

import { DEBUG, LOCALMODE } from './flags.ts';
import config from './config.ts';
import { generateEmbeds } from './src/generateActionEmbeds.ts';
import { classToType } from './src/utils.ts';

// Initialize logging client with folder to use for logs, needs --allow-write set on Deno startup
initLog('logs', DEBUG);

startBot({
	token: LOCALMODE ? config.localToken : config.token,
	intents: [Intents.GuildMessages, Intents.DirectMessages, Intents.Guilds],
	eventHandlers: {
		ready: () => {
			editBotStatus({
				activities: [{
					name: 'Booting up . . .',
					type: DiscordActivityTypes.Game,
					createdAt: new Date().getTime(),
				}],
				status: 'online',
			});

			// setTimeout added to make sure the startup message does not error out
			setTimeout(() => {
				LOCALMODE && editBotNickname(config.devServer, `LOCAL - ${config.name}`);
				editBotStatus({
					activities: [{
						name: 'Booting Complete',
						type: DiscordActivityTypes.Game,
						createdAt: new Date().getTime(),
					}],
					status: 'online',
				});
				sendMessage(config.logChannel, `${config.name} has started, running version ${config.version}.`).catch((e) => {
					log(LT.ERROR, `Failed to send message: ${JSON.stringify(e)}`);
				});
			}, 1000);
		},
		guildCreate: (guild: DiscordenoGuild) => {
			sendMessage(config.logChannel, `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`).catch((e) => {
				log(LT.ERROR, `Failed to send message: ${JSON.stringify(e)}`);
			});
		},
		guildDelete: (guild: DiscordenoGuild) => {
			sendMessage(config.logChannel, `I have been removed from: ${guild.name} (id: ${guild.id}).`).catch((e) => {
				log(LT.ERROR, `Failed to send message: ${JSON.stringify(e)}`);
			});
		},
		messageCreate: (message: DiscordenoMessage) => {
			// Ignore all other bots
			if (message.isBot) return;

			// Ignore all messages that are not commands
			if (message.content.indexOf(config.prefix) !== 0) return;

			// Split into standard command + args format
			const args = message.content.slice(config.prefix.length).trim().split(/[ \n]+/g);
			const command = args.shift()?.toLowerCase();

			if (command === 'help' || command === 'h' || command === '?') {
				// l!help or l!h or l!?
				// Help command, prints from help file
				message.send(constantCmds.help).catch((e) => {
					log(LT.ERROR, `Failed to send message: ${JSON.stringify(message)} | ${JSON.stringify(e)}`);
				});
			} else if (command === 'info' || command === 'i') {
				// l!info or l!i
				// Info command, prints short desc on bot and some links
				message.send(constantCmds.info).catch((e) => {
					log(LT.ERROR, `Failed to send message: ${JSON.stringify(message)} | ${JSON.stringify(e)}`);
				});
			} else if (command === 'version' || command === 'v') {
				// l!version or l!v
				// Returns version of the bot
				message.send(constantCmds.version).catch((e) => {
					log(LT.ERROR, `Failed to send message: ${JSON.stringify(message)} | ${JSON.stringify(e)}`);
				});
			} else if (command === 'flowchart' || command === 'flow' || command === 'f') {
				// l!flowchart or l!flow or l!logos or l!f
				// Returns logos actions stuff
				message.send(constantCmds.flowchart).catch((e) => {
					log(LT.ERROR, `Failed to send message: ${JSON.stringify(message)} | ${JSON.stringify(e)}`);
				});
			} else if (command === 'logograms' || command === 'logogram' || command === 'logos' || command === 'logo' || command === 'l') {
				// l!logograms or l!logograms or l!logos or l!logo or l!l
				// Returns logos actions stuff
				if (!args.length) {
					message.send(constantCmds.logogramsNoQuery).catch((e) => {
						log(LT.ERROR, `Failed to send message: ${JSON.stringify(message)} | ${JSON.stringify(e)}`);
					});
				} else {
					const params = {
						class: '',
						rawClass: '',
						isNin: false,
						page: 1,
						debug: false,
					};

					const classPrefixes = ['-class=', 'class=', '-c=', 'c='];
					const pagePrefixes = ['-page=', 'page=', '-p=', 'p='];
					const debugPrefixes = ['-debug=', 'debug=', '-d=', 'd='];
					const allPrefixes = classPrefixes.concat(pagePrefixes).concat(debugPrefixes);

					args.forEach((arg) => {
						if (classPrefixes.some((pfx) => arg.toLowerCase().startsWith(pfx))) { //
							params.rawClass = arg.split('=')[1];
							params.class = classToType(params.rawClass);
							params.isNin = params.rawClass.toLowerCase() === 'nin';
						} else if (pagePrefixes.some((pfx) => arg.toLowerCase().startsWith(pfx))) {
							params.page = parseInt(arg.split('=')[1]);
						} else if (debugPrefixes.some((pfx) => arg.toLowerCase().startsWith(pfx))) {
							params.debug = true;
						}
					});

					const cleanArgs = args.filter((arg) => !(allPrefixes.some((pfx) => arg.toLowerCase().startsWith(pfx))));
					const rawQuery = cleanArgs.join(' ');
					const query = rawQuery.toLowerCase();

					if (data.ActionNames.includes(query)) {
						log(LT.LOG, `in name matched '${query}'`);
						const singleAction: Array<number> = [data.ActionNames.indexOf(query)];
						message.send({
							content: 'Showing single action:',
							embeds: generateEmbeds(singleAction, params.debug),
						}).catch((e) => {
							log(LT.ERROR, `Failed to send message: ${JSON.stringify(message)} | ${JSON.stringify(e)}`);
						});
					} else if (query && data.ActionShortNames.includes(query)) {
						log(LT.LOG, `in shorthand matched '${query}'`);
						const searchResults: Array<number> = data.Actions.filter((action) => action.shorthand === query).map((action) => data.ActionNames.indexOf(action.name.toLowerCase()));
						message.send({
							content: searchResults.length > 1 ? `Showing ${searchResults.length} actions:` : 'Showing single action:',
							embeds: generateEmbeds(searchResults, params.debug),
						}).catch((e) => {
							log(LT.ERROR, `Failed to send message: ${JSON.stringify(message)} | ${JSON.stringify(e)}`);
						});
					} else {
						log(LT.LOG, `in general search '${query}'`);
						const initialSearchResults: Array<number> = data.ActionNames.filter((action) => action.includes(query)).map((action) => data.ActionNames.indexOf(action));
						const searchResults: Array<number> = initialSearchResults.filter((actionIdx) =>
							params.class ? (data.Actions[actionIdx].jobs.includes('all-nin') && !params.isNin) || data.Actions[actionIdx].jobs.includes('all') || data.Actions[actionIdx].jobs.includes(params.class) : true
						);

						if (searchResults.length) {
							const totalPages = Math.ceil(searchResults.length / config.resultsPerPage);
							if (params.page > totalPages) {
								params.page = totalPages;
							}
							const classMessage = params.class ? ` -class=${params.rawClass}` : '';
							const userQuery = `${rawQuery}${classMessage}`.trim();
							const paginationMessage = searchResults.length > config.resultsPerPage
								? `\nShowing page ${params.page} of ${totalPages}\n\nTo see more results, please run \`${config.prefix}logos ${userQuery} -page=#\`, where # is the page number you wish to see.`
								: '';
							message.send({
								content: `${searchResults.length} result${searchResults.length > 1 ? 's' : ''} matching query: \`${userQuery}\`${paginationMessage}`,
								embeds: generateEmbeds(searchResults.slice((params.page - 1) * config.resultsPerPage, config.resultsPerPage * params.page), params.debug),
							}).catch((e) => {
								log(LT.ERROR, `Failed to send message: ${JSON.stringify(message)} | ${JSON.stringify(e)}`);
							});
						} else {
							message.send({
								content: `No results found matching query: \`${rawQuery}\``,
							}).catch((e) => {
								log(LT.ERROR, `Failed to send message: ${JSON.stringify(message)} | ${JSON.stringify(e)}`);
							});
						}
					}
				}
			} else if (command === 'preset' || command === 'p') {
				// l!preset or l!p
				// Returns logos actions stuff
				const rawQuery = args.join(' ');
				const query = rawQuery.toLowerCase();

				if (data.Presets.has(query)) {
					const preset: Array<number> = data.Presets.get(query) ?? [];
					message.send({
						content: `Showing ${rawQuery} Preset:`,
						embeds: generateEmbeds(preset, false),
					}).catch((e) => {
						log(LT.ERROR, `Failed to send message: ${JSON.stringify(message)} | ${JSON.stringify(e)}`);
					});
				} else {
					message.send({
						content: `No preset found matching query: \`${rawQuery}\``,
					}).catch((e) => {
						log(LT.ERROR, `Failed to send message: ${JSON.stringify(message)} | ${JSON.stringify(e)}`);
					});
				}
			}
		},
	},
});
