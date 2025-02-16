const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urbandictionary')
        .setDescription('Find a word in the Urban Dictionary!')
        .addStringOption((option: any) =>
            option
                .setName('word')
                .setDescription('Word to get definition of')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        await interaction.deferReply();
        const word = interaction.options.getString('word');
        const r = await CombineBot.get(`https://api.urbandictionary.com/v0/define?term=${word}`);
        if (r.status == 404) {
            await interaction.deferReply(`:x: Word \"**${word}**\" not found! Perhaps you misspelled it?`);
            return;
        }
        let j = await r.json();
        j = j.list[0];
        let embed = await CombineBot.embed()
            embed
                .setTitle(`Definition of ${word}`)
                .setFields(
                    { name: 'Definition', value: (j.definition).toString() },
                    { name: 'Example', value: (j.example).toString() }
                )
                .setThumbnail('https://i.postimg.cc/cLxwjrT0/ud.png');
        await interaction.editReply({ embeds: [embed] });
    }
}

export {};
