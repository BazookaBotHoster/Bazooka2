module.exports.run = (bot, message, args) => {
  let member = message.mentions.members.first();
  message.channel.send(`LOL! ${member.username} got trolled by ${message.author.username}.`)
  message.channel.send(`LOL! ${member.username} got trolled by ${message.member.username}.`)
}

module.exports.help = {
  name: "troll"
}
