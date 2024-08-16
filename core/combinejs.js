const { EmbedBuilder } = require('discord.js');
const { VERSION } = require('./otherconfig.json');

const embed = new EmbedBuilder()
        .setFooter({text: `CombineJS v${VERSION}`, iconURL: 'https://i.postimg.cc/T3XH8Rwm/image.png'})

module.exports = { embed }
