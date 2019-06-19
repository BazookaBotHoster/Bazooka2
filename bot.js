// init ;p
const time = Date(),
 discord = require('discord.js'),
config = require('./json/config.json'),
 profanities = require("./profanities.json"),
bot     = new discord.Client({fetchAllMembers: true});
var prefix = process.env.prefix,
 {baselogger} = require('./src/logger.js'),
 result = Math.round(Math.random()),
 webhookchannelid = "441710517460008960",
 cleverbot = require('cleverbot.io'),
 ms = require('ms'),
 snekfetch = require('snekfetch'),
 cb = new cleverbot("sMNApmkOjMlZRlPZ", "gskxw3JBqEVGIAboBjOnvyTf8awM1MbS")
 const fs      = require("fs");
// End of init

// The bot's support server invite vvv
bot.invite = "https://discord.gg/YpR8yW6"
// No more invite.

// Gather commands
bot.commands = new discord.Collection();

process.on('unhandledRejection', (reason, promise) => {
  console.log(new Error(reason))
})



bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Commands: ${props.help.name}`);
    bot.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
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






