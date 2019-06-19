module.exports = (bot, message, cb, prefix) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) return;
  cb.setNick("Bazooka")
  if (!message.content.toLowerCase().includes("who is your creator")) {
        cb.create((err, session) => {
        cb.ask(message.content, (err, response) => {
        message.channel.send(response)
        console.log(`${message.author.username}(${message.author.id}) said ${message.content}, and Bazooka responded with ${response}!`)
        if (err) {
          console.error(err)
        }
      })
    })
  } else {
    message.channel.send(`My creator is <@${process.env.oid}>`)
  }
}
