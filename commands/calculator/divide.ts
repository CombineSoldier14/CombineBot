const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('divide')
        .setDescription('Divides two numbers.')
        .addNumberOption((option: any) =>
            option
                .setName('number1')
                .setDescription('First number to divide')
                .setRequired(true)
        )
        .addNumberOption((option: any) =>
            option
                .setName('number2')
                .setDescription('Second number to divide')
                .setRequired(true)
        ),
    
    async execute(interaction: any) {
        const number1 = interaction.options.getNumber('number1')
        const number2 = interaction.options.getNumber('number2')
        if (number2 === 0) {
            await interaction.reply(":x: You can't divide by zero, smarty!")
            return
        }
        await interaction.reply(`**${number1}** divided by **${number2}** = **${number1 / number2}**`)
    }
}




export {};