const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('disc2mbti')
        .setDescription('Converts your Indigo DISC score to MBTI')
        .addNumberOption((option: any) =>
            option
                .setName('d')
                .setDescription('D score')
                .setRequired(true)
        )
        .addNumberOption((option: any) =>
            option
                .setName('i')
                .setDescription('I score')
                .setRequired(true)
        )
        .addNumberOption((option: any) =>
            option
                .setName('s')
                .setDescription('S score')
                .setRequired(true)
        )
        .addNumberOption((option: any) =>
            option
                .setName('c')
                .setDescription('C score')
                .setRequired(true)
        ),
        async execute(interaction: any) {
            const d = interaction.options.getNumber('d');
            const i = interaction.options.getNumber('i');
            const s = interaction.options.getNumber('s');
            const c = interaction.options.getNumber('c');
            let mbti = '';
            if (i > 50) {
                mbti += 'E';
            } else {
                mbti += 'I';
            }
            if (c > 50) {
                mbti += 'S';
            } else {
                mbti += 'N';
            }
            if (d > 50) {
                mbti += 'T';
            } else {
                mbti += 'F';
            }
            if (s > 50) {
                mbti += 'J';
            } else {
                mbti += 'P';
            }
            await interaction.reply(`Your MBTI is: **${mbti}**`);
        }
}

export {};