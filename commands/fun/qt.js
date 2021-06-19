const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class QtCommand extends Command {
  constructor(client) {
    super(client, {
      name: "qt",
      memberName: "qt",
      group: "fun",
      description: "ur qt",
      guildOnly: true,
      aliases: ["cutie"],
    });
  }

  /**
   * @param {import("discord.js").Message} message
   * @return {*}
   */
  run(message) {
    message.delete({
      timeout: 500,
    });
    const embed = new MessageEmbed()
      .setTitle(`New QT Incoming ✨`)
      .setAuthor(`${message.author.tag}`, message.author.avatarURL())
      .setColor(`#ff00bb`)
      .setTimestamp();
    const member = message.mentions.members.first();
    if (member) {
      if (member.id === this.client.user.id) {
        embed.addField(`User`, message.author);
        return message.channel.send(embed);
      } else if (member.id === message.author.id) {
        return message.channel.send(
          "You can't qt yourself. You already are one!"
        );
      } else {
        embed.setAuthor(`${member.user.tag}`, member.user.avatarURL());
        embed.addField(`User`, member.user);
        if (Math.random() > 0.8) embed.addField(`They did it!`, message.author);
        return message.channel.send(embed);
      }
    } else {
      return message.channel.send(`You need to ping someone to call a qt`);
    }
  }
};
