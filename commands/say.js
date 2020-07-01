const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if (message.deletable) {
        message.delete();
    }

    message.channel.send(args);
}


module.exports.config = {
    name: 'say',
    description: 'Let The Bot Say What You Say',
    usage: `${config.prefix}say`,
    aliases: []
}
