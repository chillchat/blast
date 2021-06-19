const { Command } = require("discord.js-commando");
const FlipPhrases = require("../../phrases/flip.json");

module.exports = class FlipCommand extends Command {
  constructor(client) {
    super(client, {
      name: "flip",
      memberName: "flip",
      group: "fun",
      description: "Flip a member or Flip a member off",
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
        return message.channel.send(
          "I'm sorry, but I'm not a physical object to flip."
        );
      } else if (member.id === message.author.id) {
        return message.channel.send("You can't flip yourself.");
      } else {
        const good =
          FlipPhrases.good[Math.floor(Math.random() * FlipPhrases.good.length)];
        const fail =
          FlipPhrases.fail[Math.floor(Math.random() * FlipPhrases.fail.length)];
        const phrases = [
          `${message.member} flipped ${member.user} into a pile of ${good}!`,
          `${member.user} was almost flipped by ${message.member} with ${fail}!`,
          `${message.member} flipped ${member.user} into a pile of ${good}!`,
          `${member.user} was almost flipped by ${message.member} with ${fail}!`,
          `${message.member} flipped ${member.user} into a pile of ${good}!`,
          `${member.user} was almost flipped by ${message.member} with ${fail}!`,
          `${message.member} flipped ${member.user} into a pile of ${good}!`,
          `${member.user} was almost flipped by ${message.member} with ${fail}!`,
          `${message.member} flipped ${member.user} into a pile of ${good}!`,
          `${member.user} was almost flipped by ${message.member} with ${fail}!`,
          `${message.member} flipped ${member.user} into a pile of ${good}!`,
          `${member.user} was almost flipped by ${message.member} with ${fail}!`,
          `${message.member} flipped ${member.user} into a pile of ${good}!`,
          `${member.user} was almost flipped by ${message.member} with ${fail}!`,
          `${member.user} was flipped off by ${message.member}`,
        ];
        return message.channel.send(
          phrases[Math.floor(Math.random() * phrases.length)]
        );
      }
    } else {
      return message.channel.send(`You need to ping someone to flip`);
    }
  }
};
