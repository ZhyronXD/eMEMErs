const Discord = require("discord.js")
const botconfig = require('../config.json');
const creator = require('../creator.json');
const emoji = require('../emoji.json')

module.exports.run = async (bot, message, args) => {
    const lol = ["The Weird Man In The World", "The Pro Man In The World"]
    const random = lol[Math.floor(Math.random() * lol.length)];

    if (!message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) return message.reply(`\n${emoji.no} You Don't Have Permission To Run This Command! ${emoji.no}`);
    let user = message.mentions.users.first();

    let member = message.guild.member(user);

    if (!user) return message.channel.send("Pls Mention The User.");
    if (user.id === message.author.id) return message.channel.send(`${emoji.no} You Can't Kick Yourself ${emoji.no}`);
    if (user.id === bot.user.id) return message.channel.send(`${emoji.no} You Can't Kick Me. ${emoji.no}`);

    member.kick(user).then(() => {
        const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setDescription(`${emoji.yes} Successfuly Kicked **${user.tag}** ${emoji.yes} \n ***(${random})***`)
        .setColor("RANDOM")
        .setFooter(`${bot.user.username}`)
        
        message.channel.send(embed)
    }).catch(err => {
        message.channel.send("I was Unable To Kick The User");
    })
}

module.exports.config = {
    name: "kick",
    description: "Kick Some User Form a Server",
    usage: `${botconfig.prefix}kick [mentioned User]\nExample: ${botconfig.prefix}kick <@${creator.creator}>`,
    accessableby: "Admins",
    aliases: []
}
