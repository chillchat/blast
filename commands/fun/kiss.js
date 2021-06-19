const { Command } = require("discord.js-commando");

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: "kiss",
      memberName: "kiss",
      group: "fun",
      description: "Kiss a member",
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
        return message.channel.send("`lips.js` not found");
      } else if (member.id === message.author.id) {
        return message.channel.send("You tried kissing yourself.");
      } else {
        return message.channel.send(
          `Hey ${member.user}, ${message.author} just gave you a great big kiss! 😘`
        );
      }
    } else {
      return message.channel.send(`You need to ping someone to kiss`);
    }
  }
};
