const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('createembed')
        .setDescription('Create your own embed!')
        .addStringOption((option: any) =>
            option
                .setName('title')
                .setDescription('Title of embed')
                .setRequired(true)
        )
        .addStringOption((option: any) =>
            option
                .setName('description')
                .setDescription('Description of embed')
                .setRequired(true)
        )
        .addStringOption((option: any) =>
            option
                .setName('footer')
                .setDescription('Footer of embed')
                .setRequired(true)
        ),

    async execute(interaction: any) {
        const title = interaction.options.getString('title');
        const description = interaction.options.getString('description');
        const footer = interaction.options.getString('footer');
        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .setFooter({ text: footer })
        await interaction.reply({ embeds: [embed] })
    }
}




export {};