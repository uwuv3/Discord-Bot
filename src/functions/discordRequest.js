const botConfig = require("../../configs/bot.json");
async function InstallGlobalCommands(appId, commands) {
  const endpoint = `applications/${appId}/commands`;

  try {
    await DiscordRequest(endpoint, { method: "PUT", body: commands });
  } catch (err) {
    console.error(err);
  }
}
async function DiscordRequest(endpoint, options, version = "v10") {
  const url = "https://discord.com/api/" + version + "/" + endpoint;
  // Stringify payloads
  if (options.body) options.body = JSON.stringify(options.body);
  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${botConfig.token}`,
      "Content-Type": "application/json; charset=UTF-8",
      "User-Agent":
        "Uptrical Bot/1.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
    },
    ...options,
  });
  // throw API errors
  if (!res.ok) {
    const data = await res.json();
    console.log(res.status);
 console.error(JSON.stringify(data));
  }
  // return original response
  return res;
}
module.exports = { InstallGlobalCommands, DiscordRequest };
