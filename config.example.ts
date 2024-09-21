export const config = {
	'name': 'Logogram Bot', // Name of the bot
	'version': '1.1.6', // Version of the bot
	'token': 'the_bot_token', // Discord API Token for this bot
	'localToken': 'local_testing_token', // Discord API Token for a secondary OPTIONAL testing bot, THIS MUST BE DIFFERENT FROM "token"
	'prefix': 'l!', // Prefix for all commands
	'logChannel': 0n, // Discord channel ID where the bot should put startup messages and other error messages needed
	'reportChannel': 0n, // Discord channel ID where reports will be sent when using the built-in report command
	'devServer': 0n, // Discord guild ID where testing of indev features/commands will be handled, used in conjunction with the DEVMODE bool in mod.ts
	'owner': 0n, // Discord user ID of the bot admin
	'imageUrl': '', // Base URL for logos action images
	'resultsPerPage': 5, // Results to show on each page
	'mneme': { // Emojis for the mnemes
		'blue': '',
		'cyan': '',
		'green': '',
		'purple': '',
		'red': '',
		'yellow': '',
	},
	'jobType': { // Emojis for job type icons
		'tank': '',
		'healer': '',
		'melee': '',
		'ranged': '',
		'magic': '',
	},
};

export default config;
