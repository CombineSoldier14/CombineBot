const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Make the bot say a message!')
        .addStringOption(option =>
            option
                .setName('text')
                .setDescription('Text for the bot to say!')
                .setRequired(true)
        ),
        async execute(interaction) {
            const text = interaction.options.getString('text')
            await interaction.reply({ content: "Message has been sent!", ephemeral: true })
            await interaction.channel.send(text)
        }
}

export {};