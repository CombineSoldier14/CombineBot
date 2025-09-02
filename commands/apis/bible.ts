const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bible")
        .setDescription("Get a bible verse.")
        .addStringOption((option: any) =>
            option
                .setName("book-name")
                .setDescription("The book name to get a verse from.")
                .setRequired(true)
        )
        .addStringOption((option: any) =>
            option
                .setName("chapter")
                .setDescription("The chapter to get a verse from.")
                .setRequired(true)
        )
        .addStringOption((option: any) =>
            option
                .setName("verse")
                .setDescription("The verse to get from the chapter.")
                .setRequired(true)
        ),
    async execute(interaction: any) {
        await interaction.deferReply();
        const bookName = interaction.options.getString("book-name");
        const chapter = interaction.options.getString("chapter");
        const verse = interaction.options.getString("verse");

        const r = await CombineBot.get(`https://bible-api.com/${bookName}%20${chapter}:${verse}`);
        if (r.status == 404) {
            await interaction.editReply("Verse not found.");
            return;
        }
        let j = await r.json();
        await interaction.editReply(`:book: **${j.reference}** - ${j.verses[0].text}`);
    }



}

export {};
