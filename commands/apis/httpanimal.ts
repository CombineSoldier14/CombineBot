const { SlashCommandBuilder } = require('discord.js');
const { CombineJS } = require('../../core/combinejs.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('httpanimal')
        .setDescription('Get a cat or dog picture for an HTTP status code!')
        .addStringOption((option: any) =>
            option
                .setName('animal')
                .setDescription('Animal to get code of')
                .setRequired(true)
                .addChoices(
                    { name: 'Dog', value: 'dog' },
                    { name: 'Cat', value: 'cat' }
                )
        )
        .addStringOption((option: any) =>
            option
                .setName('code')
                .setDescription('Code to get image of')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        const animal = interaction.options.getString('animal');
        const code = interaction.options.getString('code');
        const rurl = await CombineJS.get(`https://http.${animal}/${code}.jpg`);
        if (rurl.status == "404") {
            await interaction.reply(':x: Animal for status code does not exist!');
            return;
        }
        const embed = await CombineJS.embed();
        embed
            .setTitle(`${animal} ${code}`)
            .setImage(`https://http.${animal}/${code}.jpg`)
            .setColor(0x5D3FD3);
        await interaction.reply({ embeds: [embed] });
    }
}

export {};
