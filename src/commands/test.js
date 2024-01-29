const { SlashCommandBuilder } = require("@discordjs/builders");
const { DiscordRequest } = require("../functions/discordRequest");
const { InteractionResponseType } = require("discord-interactions");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test Ediyorum")
    .toJSON(),
  run: async (interaction) => {
    const endpoint = `interactions/${interaction.id}/${interaction.token}/callback`;
      await DiscordRequest(endpoint, {
      method: "POST",
      body: {
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data:{
          content: "Hello",
        }
      },
    });
  },
};
