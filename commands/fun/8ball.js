const { MessageEmbed } = require("discord.js");
const { Command } = require("discord.js-commando");
const Magic8BallPhrases = require("../../phrases/8ball.json");

module.exports = class Magic8BallCommand extends Command {
  constructor(client) {
    super(client, {
      name: "8ball",
      memberName: "8ball",
      group: "fun",
      description: "Ask the magic 8 ball a question.",
      guildOnly: true,
    });
  }

  /**
   * @param {import("discord.js").Message} message
   * @return {*}
   */
  run(message) {
    const question = message.content.split(" ").slice(1).join(" ");
    if (question) {
      const phrase =
        Magic8BallPhrases[Math.floor(Math.random() * Magic8BallPhrases.length)];
      return message.channel.send(
        new MessageEmbed()
          .setColor("#000000")
          .setAuthor(message.author.tag, message.author.avatarURL())
          .setTitle(phrase)
          .setDescription(`>>> ${question}`)
      );
    } else {
      return message.channel.send("You must ask the magic 8 ball as question!");
    }
  }
};
