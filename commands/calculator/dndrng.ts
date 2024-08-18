const { SlashCommandBuilder } = require('discord.js');
const rn  = require('random-number')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dndrng')
        .setDescription('Roll some DND dice')
        .addNumberOption(option =>
            option
                .setName('d4')
                .setDescription('How many times to roll the D4 dice.')
        )
        .addNumberOption(option =>
            option
                .setName('d6')
                .setDescription('How many times to roll the D6 dice.')
        )
        .addNumberOption(option =>
            option
                .setName('d8')
                .setDescription('How many times to roll the D8 dice.')
        )
        .addNumberOption(option =>
            option
                .setName('d10')
                .setDescription('How many times to roll the D10 dice.')
        )
        .addNumberOption(option =>
            option
                .setName('d12')
                .setDescription('How many times to roll the D12 dice.')
        )
        .addNumberOption(option =>
            option
                .setName('d20')
                .setDescription('How many times to roll the D20 dice.')
        )
        .addNumberOption(option =>
            option
                .setName('d100')
                .setDescription('How many times to roll the D100 dice.')
        )
        .addNumberOption(option =>
            option
                .setName('extraadd')
                .setDescription('Any extra numbers to be added')
        )
        .addNumberOption(option =>
            option
                .setName('extraminus')
                .setDescription('Any extrea numbers to be subtracted')
        )
        .addNumberOption(option =>
            option
                .setName('custommax')
                .setDescription('A custom maximum.')
        )
        .addNumberOption(option =>
            option
                .setName('custommin')
                .setDescription('A custom minimum.')
        )
        .addNumberOption(option =>
            option
                .setName('customamount')
                .setDescription('Amount to do the custom min/max. If left undefined, this is one.')
        ),
    
    async execute(interaction) {
        var total = 0;
        var d4 = interaction.options.getNumber('d4') as number;
        var d6 = interaction.options.getNumber('d6') as number;
        var d8 = interaction.options.getNumber('d8') as number;
        var d10 = interaction.options.getNumber('d10') as number;
        var d12 = interaction.options.getNumber('d12') as number;
        var d20 = interaction.options.getNumber('d20') as number;
        var d100 = interaction.options.getNumber('d100') as number;
        var extraadd = interaction.options.getNumber('extraadd') as number;
        var extraminus = interaction.options.getNumber('extraminus') as number;
        var custommax = interaction.options.getNumber('custommax') as number;
        var custommin = interaction.options.getNumber('custommin') as number;
        var customamount = interaction.options.getNumber('customamount') as number;
        if (d4 == null) {
            var d4 = 0;
        };
        if (d6 == null) {
            var d6 = 0;
        };
        if (d8 == null) {
            var d8 = 0;
        };
        if (d10 == null) {
            var d10 = 0;
        };
        if (d12 == null) {
            var d12 = 0;
        };
        if (d20 == null) {
            var d20 = 0;
        };
        if (d100 == null) {
            var d100 = 0;
        };
        if (extraadd == null) {
            var extraadd = 0;
        };
        if (extraminus == null) {
            var extraminus = 0;
        };
        if (custommax == null) {
            var custommax = 0;
        };
        if (custommin == null) {
            var custommin = 0;
        };
        if (customamount == null) {
            var customamount = 1;
        };
        if (custommin > custommax) {
            await interaction.reply('A custom minimum cannot be greater than a custom maximum')
        }
        for (let i = 0; i < d4; i++) {
            total += rn({ min: 1, max: 4, integer: true });
        };
        for (let i = 0; i < d6; i++) {
            total += rn({ min: 1, max: 6, integer: true });
        };
        for (let i = 0; i < d8; i++) {
            total += rn({ min: 1, max: 8, integer: true });
        };
        for (let i = 0; i < d10; i++) {
            total += rn({ min: 1, max: 10, integer: true });
        };
        for (let i = 0; i < d12; i++) {
            total += rn({ min: 1, max: 12, integer: true });
        };
        for (let i = 0; i < d20; i++) {
            total += rn({ min: 1, max: 20, integer: true });
        };
        for (let i = 0; i < customamount; i++) {
            total += rn({ min: custommin, max: custommax, integer: true });
        };
        total += extraadd
        total -= extraminus
        await interaction.reply(`:game_die: **${total}**`)
        
    }
}
export {};
