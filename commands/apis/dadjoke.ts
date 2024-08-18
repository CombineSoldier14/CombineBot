const { SlashCommandBuilder } = require('discord.js');
const { get } = require('../../core/combinejs.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dadjoke')
        .setDescription('Get a random dad joke!'),
    
    async execute (interaction: any) {
        const request = await get('https://icanhazdadjoke.com/');
        const response = await request.json();
        await interaction.reply(response.joke);
    }
}
export {};