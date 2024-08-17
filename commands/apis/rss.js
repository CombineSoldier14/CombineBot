const { SlashCommandBuilder } = require('discord.js');
const { embed } = require('../../core/combinejs.js');
let Parser = require('rss-parser');

let parser = new Parser();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rss')
        .setDescription('Get the contents of an RSS link!')
        .addStringOption(option =>
            option
                .setName('rsslink')
                .setDescription('Link to RSS')
                .setRequired(true)
        ),
    
    async execute (interaction) {
        const rsslink = interaction.options.getString('rsslink')
        const feed = await parser.parseURL(rsslink)
        let fields = []
        for (let item in feed.items) {
            if (fields.length > 24) {
                break;
            };
            fields.push({ name: item.title, value: `[Link to post](${item.link})` });
        };
        embed.setTitle(feed.title);
        embed.setDescription(feed.description);
        embed.setFields(fields);
        await interaction.reply({ embeds: [embed] })
    }
}