require("dotenv").config();
const path = require("path");

const { CommandoClient } = require("discord.js-commando");

const blast = new CommandoClient({
  commandPrefix: ">>",
  owner: process.env.owners.split(", "),
  ws: {
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
  },
});

blast.registry
  .registerDefaultTypes()
  .registerGroups([["fun", "Fun Commands"]])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, "commands"));

blast.once("ready", () => {
  console.log(`Logged in as ${blast.user.tag}! (${blast.user.id})`);
  blast.user.setPresence({
    activity: {
      name: "Chill Chat",
      type: "COMPETING",
    },
  });
});

blast.on("error", console.error);

blast.login(process.env.token);
