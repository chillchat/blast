const { Command } = require("discord.js-commando");

module.exports = class YellCommand extends Command {
  constructor(client) {
    super(client, {
      name: "yell",
      memberName: "yell",
      group: "fun",
      description: "Yell at a member",
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
      if (member.id === this.client.user.id) {
        return message.channel.send("`voice.js` not found");
      } else if (member.id === message.author.id) {
        return message.channel.send(
          `${message.member} yelled at themselves in confusion...`
        );
      } else {
        return message.channel.send(
          `${member.user} is getting yelled at by ${message.author}.`
        );
      }
    } else {
      return message.channel.send(`You need to ping someone to yell at`);
    }
  }
};
