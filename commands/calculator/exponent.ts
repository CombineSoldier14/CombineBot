const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('exponent')
        .setDescription('Gets the exponent of a number')
        .addNumberOption((option: any) =>
            option
                .setName('number1')
                .setDescription('Number to get exponent of')
                .setRequired(true)
        )
        .addNumberOption((option: any) =>
            option
                .setName('number2')
                .setDescription('Exponent to get')
                .setRequired(true)
        ),
    
    async execute(interaction: any) {
        const number1 = interaction.options.getNumber('number1')
        const number2 = interaction.options.getNumber('number2')
        await interaction.reply(`**${number1}** to the power of **${number2}** is **${number1 ** number2}**`)
    }
}




export {};