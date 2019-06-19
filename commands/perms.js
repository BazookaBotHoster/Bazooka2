const config = require('../json/config.json')
const admins = config.admins

module.exports.run = (bot, message, args, discord) => {
  if (message.author.id == process.env.oid) {
    let em = new discord.RichEmbed()
    .setTitle("Bazooka Perms")
    .setDescription("Your user ID is set as `process.env.oid`, you have full perms.")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username}.`)
    .setColor("RANDOM")
    message.author.send({embed: em})
  } else {
    if (admins.includes(message.author.id)) {
      let em = new discord.RichEmbed()
      .setTitle("Bazooka Perms")
      .setDescription("Your user ID is in the admin list, you have admin permissions.")
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}.`)
      .setColor("RANDOM")
      message.author.send({embed: em})
    } else {
      message.author.send("You are a standard user.")
    }
  }
}

module.exports.help = {
  name: "perms"
}
