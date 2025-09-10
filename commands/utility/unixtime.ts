const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unixtime')
        .setDescription('Get the current Unix timestamp'),
    async execute(interaction: any) {
        const unixTime = Math.floor(Date.now() / 1000);
        await interaction.reply(`Current Unix timestamp: **${unixTime}**`);
    }
};

export {};