const { SlashCommandBuilder } = require('discord.js');
const { embed } = require('../../core/combinejs.ts');
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
        const rsslink = interaction.options.getString('rsslink');
        const feed = await parser.parseURL(rsslink);
        let fields = [] as any;
        feed.items.forEach(item =>
            fields.push({ name: item.title, value: `[Link to post](${item.link})` })
        )
        embed.setTitle(feed.title);
        if (feed.description = null) {
            var desc = "";
        } else {
            var desc = feed.description as string;
        }
        embed.setDescription(desc);
        embed.setFields(fields);
        await interaction.reply({ embeds: [embed] });
    }
}
export {};
