const Discord = require("discord.js")
const botconfig = require("../config.json");
const creator = require('../creator.json');
const supportlist = require('../support/SL.json');
const emoji = require('../emoji.json')
//Not Important :V dont Copy This :V
module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setAuthor("Supporter List", bot.user.displayAvatarURL())
    .setDescription(`${emoji.flypig} To Be a Supporter type __${botconfig.prefix}support__ ${emoji.flypig}\n Then Join Crystalys Bot Support Server!`)
    .setFooter(`${bot.user.username}`)
    .setColor('RANDOM')
    .addField('Supporter List', `${supportlist.slist}`)
    .setTimestamp()

message.channel.send(embed);
}

module.exports.config = {
    name: "supporterlist",
    description: "Showing Bot Supporter List",
    usage: `${botconfig.prefix}supporterlist`,
    accessableby: "Members",
    aliases: ['sl']
}
