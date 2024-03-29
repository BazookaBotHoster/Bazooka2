// init ;p
const time = Date(),
pak = require('./package.json'),
discord = require('discord.js'),
config = require('./json/config.json'),
profanities = require("./profanities.json"),
bot = new discord.Client()
var prefix = process.env.prefix,
{baselogger} = require('./src/logger.js'),
result = Math.round(Math.random()),
webhookchannelid = "441710517460008960",
cleverbot = require('cleverbot.io'),
ms = require('ms'),
snekfetch = require('snekfetch'),
cb = new cleverbot("sMNApmkOjMlZRlPZ", "gskxw3JBqEVGIAboBjOnvyTf8awM1MbS")
// End of init

// The bot's support server invite vvv
bot.invite = "https://discord.gg/YpR8yW6"
// No more invite.

// Gather commands
bot.commands = new discord.Collection();

process.on('unhandledRejection', (reason, promise) => {
  console.log(new Error(reason))
})

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});


bot.on('error', (err) => {
  console.error(`Error... ${err}`).then(() => {
    bot.destroy().then(() => {
      bot.login(process.env.botToken)
    })
  })
})
bot.on("guildMemberAdd", (member) => require('./events/guildMemberAdd.js')(bot, member))
bot.on("guildMemberRemove", (member) => require('./events/guildMemberRemove.js')(bot, member))
// bot.on("guildBanAdd", (guild, member) => require('./events/BanAdd.js')(bot, guild, member))
bot.on("guildBanRemove", (guild, member) => require('./events/BanRemove.js')(bot, guild, member))

  
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.type == "dm") return;

  let mArray = message.content.split(" ");
  let args = mArray.slice(1);
  let loggedcmd = mArray[0].slice(prefix.length)

  let cmd = bot.commands.get(loggedcmd);
  if (message.author.bot) return;

  if (cmd) {
      if (config.userblacklist.includes(message.author.id)) return;
      cmd.run(bot, message, args, discord)
      console.log(`${message.author.username} used the ${loggedcmd} command.`);
      baselogger(bot, `**Command Run**\n\n**Command:** ${loggedcmd}\n**User:** ${message.author.tag}\n**Message:** ${message.content}\n**Guild:** ${message.guild.name}\n**Channel:** ${message.channel.name}`);
  } 
    if (message.content == "i love you Bazooka") {
    message.channel.send("oh god, not another one");
  }
  
  if (message.isMentioned("294194506113220608")) {
    const em = new discord.RichEmbed()
    .setTitle(`Bazooka Intro`)
    .setDescription(`Hey! Thanks for inviting me! If you need help type b.help ! If you want info on me type b.info`)
    .setColor("GREEN")
    .setTimestamp()
    console.log('lol')
    message.channel.send({embed: em})
  }
 });
      
bot.on("guildCreate", (guild) => {
  require('./events/guildCreate.js')(bot, guild, discord)
  baselogger(bot, `**Guild Join**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.username}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});

bot.on("guildDelete", (guild) => {
  require('./events/guildDelete.js')(bot, guild, discord)
  baselogger(bot, `**Guild Leave**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.username}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});

bot.login(process.env.botToken); 


