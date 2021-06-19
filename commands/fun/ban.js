const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class BanCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ban",
      memberName: "ban",
      group: "fun",
      description: "Ban a member",
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
        new MessageEmbed()
          .setTitle(`New Banned User`)
          .addField(`Moderator`, message.author)
          .addField(`Banned User`, member.user)
          .addField(`Reason`, message.content.split(" ").slice(2).join(" "))
          .setColor(0xff0000)
          .setTimestamp()
      );
    } else {
      return message.channel.send(`You need to ping someone to ban`);
    }
  }
};
