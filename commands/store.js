const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('k?'))return;  


    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [k?buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [k?buy nikes]\nCar: 800 [k?buy car]\nMansion: 1200 [k?buy mansion]")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["shop"]
}
