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

  bot.guilds.forEach((guild, id) => {
    console.log(`[SERVER] [${guild.memberCount}] ${guild.name} (${guild.id}) | Joined: ${guild.joinedAt.toString()}\n`)
  });

bot.on('error', (err) => {
  console.error(`Error... ${err}`).then(() => {
    bot.destroy().then(() => {
      bot.login(process.env.botToken)
    })
  })
})

bot.on("guildCreate", (guild) => {
  require('./events/guildCreate.js')(bot, guild, discord)
  baselogger(bot, `**Guild Join**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.username}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});

bot.on("guildDelete", (guild) => {
  require('./events/guildDelete.js')(bot, guild, discord)
  baselogger(bot, `**Guild Leave**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.username}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});

bot.login(process.env.botToken); 






