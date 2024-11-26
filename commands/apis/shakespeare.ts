const { SlashCommandBuilder } = require('discord.js');
const { CombineJS } = require('../../core/combinejs.js');
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
        const r = await CombineJS.getShakespeare(usertext)
        await interaction.editReply(r.contents.translated);
    }
}

export {};