module.exports.run = (bot, message, args) => {
  const result = Math.round(Math.random())
  if (message.content.startsWith("b.question")) {
    if (result) {
    message.channel.send("Yes!")
  } else {
    message.channel.send("No.")
  }
}
}

module.exports.help = {
  name: "question"
}
