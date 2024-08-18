const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reply')
        .setDescription('Make the bot reply to a message!')
        .addStringOption(option =>
            option
                .setName('text')
                .setDescription('Text for the bot to say!')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('msg_id')
                .setDescription('Message ID of the message to reply to.')
                .setRequired(true)
        ),
        async execute(interaction) {
            const text = interaction.options.getString('text')
            const id = interaction.options.getString('msg_id')
            const message = await interaction.channel.messages.fetch(id)
            await interaction.reply({ content: "Message has been replied to!", ephemeral: true })
            await message.reply(text)
        }
}

export {};