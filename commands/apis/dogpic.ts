const { SlashCommandBuilder } = require('discord.js');
const { get, embed } = require('../../core/combinejs.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dogpic')
        .setDescription('Get a random dog picture!'),
    
    async execute(interaction: any) {
        const request = await get("https://dog.ceo/api/breeds/image/random");
        const response = await request.json()
        embed.setTitle('Dog')
        embed.setImage(response.message)
        await interaction.reply({ embeds: [embed] })
    }
};


export {};