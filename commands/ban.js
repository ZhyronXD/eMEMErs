const Discord = require("discord.js")
const botconfig = require("../config.json");
const creator = require('../creator.json');
const emoji = require('../emoji.json')

module.exports.run = async (bot, message, args) => {
    const lol = ["The Weird Man In The World", "The Pro Man In The World"]
    const random = lol[Math.floor(Math.random() * lol.length)];

    let user = message.mentions.users.first();

    let member = message.guild.member(user);

    if (!user) return message.channel.send("Pls Mention The User.");
    if (user.id === message.author.id) return message.channel.send(`${emoji.no} You Can't Ban Yourself! ${emoji.no}`);
    if (user.id === bot.user.id) return message.channel.send(`${emoji.no} You Can't Ban Me! ${emoji.no}`);

    member.ban(user).then(() => {
        const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setDescription(`${emoji.yes} Successfuly Banned **${user.tag}** ${emoji.yes} \n ***(${random})***`)
        .setColor("RANDOM")
        .setFooter(`${bot.user.username}`)
        
        message.channel.send(embed)
    }).catch(err => {
        message.channel.send(`${emoji.no} I was Unable To Ban The User ${emoji.no}`);
    })
}

module.exports.config = {
    name: "ban",
    description: "Ban Some User from Server",
    usage: `${botconfig.prefix}ban [mentioned User]\nExample: ${botconfig.prefix}ban <@${creator.creator}>`,
    accessableby: "Admins",
    aliases: []
}
