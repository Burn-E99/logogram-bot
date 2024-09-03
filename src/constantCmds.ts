import config from '../config.ts';

const errorColor = 0xe71212;

export const constantCmds = {
	help: {
		embeds: [{
			title: `${config.name}'s Available Commands:`,
			fields: [
				{
					name: `\`${config.prefix}?\``,
					value: 'This command',
					inline: true,
				},
				{
					name: `\`${config.prefix}info\``,
					value: 'Prints some information and links relating to the bot',
					inline: true,
				},
				{
					name: `\`${config.prefix}version\``,
					value: 'Prints the bots version',
					inline: true,
				},
				{
					name: `\`${config.prefix}logograms [query]\` or \`${config.prefix}l [query]\``,
					value: 'Sends information about the requested logogram, or logograms matching the query\nCan use `-class=abbr` to further filter the results, or `-page=#` to view more results',
					inline: true,
				},
				{
					name: `\`${config.prefix}preset [query]\` or \`${config.prefix}p [query]\``,
					value: 'Sends information about the requested preset list',
					inline: true,
				},
			],
		}],
	},
	info: {
		embeds: [{
			fields: [{
				name: `${config.name}, a Discord bot for Eureka Logogram Actions.`,
				value: `${config.name} is developed by Ean AKA Burn_E99.\n\nFINAL FANTASY XIV SQUARE ENIX CO., LTD. FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. All material used under license.`,
			}],
		}],
	},
	version: {
		embeds: [{
			title: `My current version is ${config.version}`,
		}],
	},
	logogramsNoQuery: {
		embeds: [{
			color: errorColor,
			title: 'No query provided!',
			description: `Please type something after the command, such as \`${config.prefix}logos wisdom\`.`,
		}],
	},
};
