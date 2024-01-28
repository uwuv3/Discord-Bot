const { InstallGlobalCommands } = require("../functions/discordRequest");
const testCommand = require("./commands/test");
const botConfig = require("../../configs/bot.json");
const dcinteraction = require("discord-interactions");
/*
(async () => {
  await InstallGlobalCommands(botConfig.clientID, [testCommand.data]);
})();
*/
/**
 * @type {import("events").EventEmitter}
 */
const event = global.events;
event.on("INTERACTION_CREATE", async (interaction) => {
  if (!interaction.type == dcinteraction.InteractionType.APPLICATION_COMMAND)
    return;
  if (interaction.data.name == testCommand.data.name)
    return await testCommand.run(interaction);
});
