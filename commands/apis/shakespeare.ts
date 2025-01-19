const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shakespeare')
        .setDescription('Translate english to Shakespeare english!')
        .addStringOption((option: any) =>
            option
                .setName('text')
                .setDescription('Text to translate')
                .setRequired(true)
        ),
    
    async execute(interaction: any) {
        await interaction.deferReply();
        const usertext = interaction.options.getString('text');
        const r = await this.get(`https://api.funtranslations.com/translate/shakespeare.json?text=${usertext}`);
        const j = await r.json();
        await interaction.editReply(j.contents.translated);
    }
}

export {};
