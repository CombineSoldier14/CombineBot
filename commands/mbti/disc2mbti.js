const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('disc2mbti')
        .setDescription('Convert your indigo DISC scores to MBTI!')
        .addNumberOption(option =>
            option
                .setName('d')
                .setDescription('Your Dominance Score')
                .setRequired(true)
        )
        .addNumberOption(option =>
            option
                .setName('i')
                .setDescription('Your Influence Score')
                .setRequired(true)
        )
        .addNumberOption(option =>
            option
                .setName('s')
                .setDescription('Your Steadiness Score')
                .setRequired(true)
        )
        .addNumberOption(option =>
            option
                .setName('c')
                .setDescription('Your Compliance Score')
                .setRequired(true)
        ),
    
    async execute(interaction) {
        const D = interaction.options.getNumber('d');
        const I = interaction.options.getNumber('i');
        const S = interaction.options.getNumber('s');
        const C = interaction.options.getNumber('c');
        if (D >= 50) {
            var tf = "T";
            var longtf = 'Thinking';
        } else {
            var tf = "F";
            var longtf = "Feeling";
        };
        if (I >= 50) {
            var ie = 'E';
            var longie = 'Extroverted';
        } else {
            var ie = 'I';
            var longie = 'Introverted';
        };
        if (S >= 50) {;
            var jp = 'J'
            var longjp = 'Judging';
        } else {
            var jp = 'P';
            var longjp = 'Percieving';
        };
        if (C >= 50) {
            var sn = 'N';
            var longsn = 'Intuitive';
        } else {
            var sn = 'S';
            var longsn = 'Sensing';
        };
        await interaction.reply(`Your MBTI is: **${ie}${sn}${tf}${jp}**`)
        await interaction.channel.send(`*${longie}, ${longsn}, ${longtf}, and ${longjp}*`)
    }
}
