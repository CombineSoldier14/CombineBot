const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');
let Parser = require('rss-parser');

let parser = new Parser();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rss')
        .setDescription('Get the contents of an RSS link!')
        .addStringOption((option: any) =>
            option
                .setName('rsslink')
                .setDescription('Link to RSS')
                .setRequired(true)
        ),
    
    async execute (interaction: any) {
        const rsslink = interaction.options.getString('rsslink');
        const feed = await parser.parseURL(rsslink);
        let fields = [] as any;
        feed.items.forEach((item: any) =>
            fields.push({ name: item.title, value: `[Link to post](${item.link})` })
        )
        let embed = await CombineBot.embed();
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
