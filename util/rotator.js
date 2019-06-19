/* var r = "true"

module.exports = (bot) => {
   let status = ["You wouldn't like me when I'm angry.", `${bot.guilds.size} servers`]
   setInterval(() => {
   let gameval = 0;
   if (gameval == status.length) {
        gameval = 0;
   }
   var game = status[gameval]
   bot.user.setActivity(`for b.help | ${game}`, {type: "WATCHING"})
   }, 25000)
}
*/
