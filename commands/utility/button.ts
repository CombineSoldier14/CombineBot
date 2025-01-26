const { SlashCommandBuilder } = require('discord.js');
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Create an embed link button')
        .addStringOption((option: any) => 
            option.setName('label')
                .setDescription('The label of the button')
                .setRequired(true)
        )
        .addStringOption((option: any) => 
            option.setName('url')
                .setDescription('The URL of the button')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        const label = interaction.options.getString('label');
        const url = interaction.options.getString('url');
        const button = new ButtonBuilder()
            .setLabel(label)
            .setStyle(ButtonStyle.Link)
            .setURL(url);
        const row = new ActionRowBuilder()
            .addComponents(button);
        await interaction.reply({ components: [row] });
    }
    
}

export {};