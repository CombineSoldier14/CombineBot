const { SlashCommandBuilder } = require('discord.js');
const { CombineJS } = require('../../core/combinejs.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomreddit')
        .setDescription('Get a random post from a subreddit!')
        .addStringOption((option: any) =>
            option
                .setName('sub')
                .setDescription('Case sensitive name of subreddit. Do not include the "r/"')
                .setRequired(true)
        ),

    async execute (interaction: any) {
        await interaction.deferReply();
        const sub = interaction.options.getString('sub');
        const j = await CombineJS.getRandomReddit(sub);
        let embed = CombineJS.embed();
        embed
            .setTitle(`${j.title}`)
            .setDescription(`Upvote score: ${j.ups}`)
            .setColor(0xffd700)
            .setImage(j.url)
            .setFooter({ text: `Posted in r/${j.subreddit} by u/${j.author}` });
        await interaction.editReply({ embeds: [embed] });
    }
}

export {};