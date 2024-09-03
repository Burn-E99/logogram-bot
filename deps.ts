export {
	startBot, editBotStatus, editBotNickname,
	sendMessage,
	Intents, DiscordActivityTypes,
	cache, cacheHandlers
} from "https://deno.land/x/discordeno@12.0.1/mod.ts";

export type {
	DiscordenoMessage, DiscordenoGuild, Embed
} from "https://deno.land/x/discordeno@12.0.1/mod.ts";

export { initLog, log, LogTypes as LT } from 'https://raw.githubusercontent.com/Burn-E99/Log4Deno/V1.1.1/mod.ts';