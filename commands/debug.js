const pak = require("../package.json")
const config = require("../json/config.json")
//🔎 👤 ⚙ 🆔 📄 📝 ⌛ 🖍 🔊 📬 🚀


module.exports.run = (bot, message, args, discord) => {
 // return; //SOON
 if (message.author.id == 335762706420203523) {
  let guild_list = []
  bot.guilds.forEach(async(guild, id) => {
    guild_list.push(`${guild.name} ${id}\n`)
  })
  let embed = new discord.RichEmbed()
    .setTitle(`Bazooka Debugger`)
    .setTimestamp()
    .setAuthor(`${bot.user.username} Debugger`, bot.user.avatarURL)
    .setColor("7289DA")
    .setDescription(`
⚙ **Bot Version:** ${pak.version}\n
👤 **Bot Name:** ${bot.user.tag}\n
🆔 **Bot ID:** ${bot.user.id}\n
🚀 **Memory Usage:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n
🖍 **Bot Prefix:** ${config.prefix}\n
🔎 **I know:**\n -   ${bot.guilds.size} Guilds\n -   ${bot.channels.size} Channels\n -   ${bot.users.size} Users\n
⌛ **Uptime:** ${Math.round(bot.uptime / (1000 * 60 * 60))} hours, ${Math.round(bot.uptime / (1000 * 60)) % 60}  minutes, ${Math.round(bot.uptime / 1000) % 60} seconds.\n\n`)
  message.channel.send({embed: embed})
} else {
  message.channel.send("Nope!")
} 
}

module.exports.help = {
  name: "debug",
  usage: ``,
  information: "Get infomation"
}

module.exports.settings = {
  permission: "Creator",
  deleteresponder: true,
  category: "Info"
}
