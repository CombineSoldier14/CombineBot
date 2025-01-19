const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription('Flip a coin!'),

    async execute(interaction: any) {
        const answers = ["Heads", "Tails"];
        const answer = answers[Math.floor(Math.random() * answers.length)];
        await interaction.reply(`:coin: **${answer}**!`);
    }
}

export {};