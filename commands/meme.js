module.exports.run = (bot, message, args, discord) => {
  require('snekfetch').get('https://meme-api.explosivenight.us/v1/random/?type=json')
  .then(response => {
    let em = new discord.RichEmbed()
    .setTitle("Bazooka Random Memes")
    .setImage(response.body.url)
    .setDescription("I got a meme for you!")
    .setTimestamp()
    .setFooter("Random Meme!")
    if (response.body.status == "200 OK") {
      message.channel.send({embed: em})
    } else {
      message.channel.send("I couldn't get a meme...")
    }
  })
}

module.exports.help = {
  name: "meme"
}
