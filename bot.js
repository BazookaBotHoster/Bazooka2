// init ;p
const time = Date(),
const pak = require('./package.json'),
const discord = require('discord.js'),
const config = require('./json/config.json'),
const profanities = require("./profanities.json"),
const bot = new discord.Client()
var prefix = process.env.prefix,
const {baselogger} = require('./src/logger.js'),
const result = Math.round(Math.random()),
const webhookchannelid = "441710517460008960",
const cleverbot = require('cleverbot.io'),
const ms = require('ms'),
const snekfetch = require('snekfetch'),
const cb = new cleverbot("sMNApmkOjMlZRlPZ", "gskxw3JBqEVGIAboBjOnvyTf8awM1MbS")
// End of init

// The bot's support server invite vvv
bot.invite = "https://discord.gg/YpR8yW6"
// No more invite.

// Gather commands
bot.commands = new discord.Collection();

process.on('unhandledRejection', (reason, promise) => {
  console.log(new Error(reason))
})



bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
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






