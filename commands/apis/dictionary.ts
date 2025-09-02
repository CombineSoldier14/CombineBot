const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dictionary')
        .setDescription('Find a word in the dictionary!')
        .addStringOption((option: any) =>
            option
                .setName('word')
                .setDescription('Word to get definition of')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        await interaction.deferReply();
        const word = interaction.options.getString('word');
        const r = await CombineBot.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (r.status == 404) {
            await interaction.editReply(`:x: Word \"**${word}**\" not found! Perhaps you misspelled it?`);
            return;
        }
        let j = await r.json();
        j = j[0];
        let description = "";
        for (let definitions of j.meanings) {
            description = description + `_${definitions.partOfSpeech} usage:_ ${definitions.definitions[0].definition}\n`;
        }
        let embed = await CombineBot.embed()
            embed
                .setTitle(`Definition of ${word}`)
                .setDescription(description)
        await interaction.editReply({ embeds: [embed] })
    }
}

export {};
