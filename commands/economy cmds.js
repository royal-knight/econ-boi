const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('k?'))return;  


    let embed = new Discord.MessageEmbed()
    .setTitle("Money Man Help Centre [Prefix k?]")
    .addField("Economy Commands", "`work` `bj` `example bj`  `beg` `rob` `pay` `balance` `profile` `withdraw` `deposit` `daily` `weekly` `store` `buy` `sell`")
    .addField("Gambling Commmands", "`roulette` `slots`")
    .addField("Economy Extra Commands", "`storeinfo [item]`")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}

module.exports.help = {
  name:"economy cmds",
  aliases: ["economycmds2"]
}
