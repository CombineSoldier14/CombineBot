const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minus')
        .setDescription('Subtracts two numbers.')
        .addNumberOption((option: any) =>
            option
                .setName('number1')
                .setDescription('First number to subtract')
                .setRequired(true)
        )
        .addNumberOption((option: any) =>
            option
                .setName('number2')
                .setDescription('Second number to subtract')
                .setRequired(true)
        ),
    
    async execute(interaction: any) {
        const number1 = interaction.options.getNumber('number1')
        const number2 = interaction.options.getNumber('number2')
        await interaction.reply(`**${number1}** - **${number2}** = **${number1 - number2}**`)
    }
}




export {};