const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('xkcd')
        .setDescription('Get a specified or the recent XKCD comic!')
        .addNumberOption((option: any) =>
            option
                .setName('comicnum')
                .setDescription('Number of comic to get. If left blank, this will be recent.')
        ),
    
    async execute (interaction: any) {
        let comicnum = interaction.options.getNumber('comicnum');
        if (comicnum == null) {
            var comicnum1 = "";
        } else {
            var comicnum1 = `/${comicnum}`;
        };
        let embed = await CombineBot.embed();
        const request = await CombineBot.get(`https://xkcd.com/${comicnum1}/info.0.json`);
        const response = await request.json();
        embed.setTitle(`#${response.num} - ${response.title}`);
        embed.setDescription(`${response.alt}`);
        embed.setFooter({text: `${response.month}/${response.day}/${response.year}`});
        embed.setImage(response.img);
        await interaction.reply({ embeds: [embed] });
    }
}
export {};
