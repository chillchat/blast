const { Command } = require("discord.js-commando");

module.exports = class HugCommand extends Command {
  constructor(client) {
    super(client, {
      name: "hug",
      memberName: "hug",
      group: "fun",
      description: "Hug a member",
      guildOnly: true,
    });
  }

  /**
   * @param {import("discord.js").Message} message
   * @return {*}
   */
  run(message) {
    const member = message.mentions.members.first();
    if (member) {
      return message.channel.send(
        `Hey ${member.user}, ${message.member} just gave you a great big hug! 🤗`
      );
    } else {
      return message.channel.send(`${member.member} hugged.`);
    }
  }
};
