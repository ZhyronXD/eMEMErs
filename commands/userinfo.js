const Discord = require('discord.js');
const moment = require('moment');
const creator = require('../creator.json');
const botconfig = require('../config.json');

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (member.presence.status === 'dnd') member.presence.status = ':no_entry:|Do Not Disturb';
    if (member.presence.status === 'online') member.presence.status = ':green_circle:|Online';
    if (member.presence.status === 'idle') member.presence.status = ':crescent_moon:|Idle';
    if (member.presence.status === 'offline') member.presence.status = 'offline';

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const created = Math.floor(x / 86400000);
    const joined = Math.floor(y / 86400000);

    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm");
    let status = member.presence.status;

    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTimestamp()
    .setColor('RANDOM')
    .setFooter(`${bot.user.username}`)
    .setThumbnail(member.user.displayAvatarURL())
    .addField("User ID", member.id)
    .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
    .addField('Joined the server At', `${joineddate} \n ${joined} Days Ago`)
    .addField("Status", status)

    message.channel.send(userEmbed);
}

module.exports.config = {
    name: "userinfo",
    description: "Shows the information of a member/user",
    usage: `${botconfig.prefix}userinfo`,
    accessableby: "Members",
    aliases: ['ui']
}
//its perfect B)