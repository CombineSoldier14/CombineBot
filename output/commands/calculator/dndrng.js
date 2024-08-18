"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { SlashCommandBuilder } = require('discord.js');
const rn = require('random-number');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('dndrng')
        .setDescription('Roll some DND dice')
        .addNumberOption((option) => option
        .setName('d4')
        .setDescription('How many times to roll the D4 dice.'))
        .addNumberOption((option) => option
        .setName('d6')
        .setDescription('How many times to roll the D6 dice.'))
        .addNumberOption((option) => option
        .setName('d8')
        .setDescription('How many times to roll the D8 dice.'))
        .addNumberOption((option) => option
        .setName('d10')
        .setDescription('How many times to roll the D10 dice.'))
        .addNumberOption((option) => option
        .setName('d12')
        .setDescription('How many times to roll the D12 dice.'))
        .addNumberOption((option) => option
        .setName('d20')
        .setDescription('How many times to roll the D20 dice.'))
        .addNumberOption((option) => option
        .setName('d100')
        .setDescription('How many times to roll the D100 dice.'))
        .addNumberOption((option) => option
        .setName('extraadd')
        .setDescription('Any extra numbers to be added'))
        .addNumberOption((option) => option
        .setName('extraminus')
        .setDescription('Any extrea numbers to be subtracted'))
        .addNumberOption((option) => option
        .setName('custommax')
        .setDescription('A custom maximum.'))
        .addNumberOption((option) => option
        .setName('custommin')
        .setDescription('A custom minimum.'))
        .addNumberOption((option) => option
        .setName('customamount')
        .setDescription('Amount to do the custom min/max. If left undefined, this is one.')),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            var total = 0;
            var d4 = interaction.options.getNumber('d4');
            var d6 = interaction.options.getNumber('d6');
            var d8 = interaction.options.getNumber('d8');
            var d10 = interaction.options.getNumber('d10');
            var d12 = interaction.options.getNumber('d12');
            var d20 = interaction.options.getNumber('d20');
            var d100 = interaction.options.getNumber('d100');
            var extraadd = interaction.options.getNumber('extraadd');
            var extraminus = interaction.options.getNumber('extraminus');
            var custommax = interaction.options.getNumber('custommax');
            var custommin = interaction.options.getNumber('custommin');
            var customamount = interaction.options.getNumber('customamount');
            if (d4 == null) {
                var d4 = 0;
            }
            ;
            if (d6 == null) {
                var d6 = 0;
            }
            ;
            if (d8 == null) {
                var d8 = 0;
            }
            ;
            if (d10 == null) {
                var d10 = 0;
            }
            ;
            if (d12 == null) {
                var d12 = 0;
            }
            ;
            if (d20 == null) {
                var d20 = 0;
            }
            ;
            if (d100 == null) {
                var d100 = 0;
            }
            ;
            if (extraadd == null) {
                var extraadd = 0;
            }
            ;
            if (extraminus == null) {
                var extraminus = 0;
            }
            ;
            if (custommax == null) {
                var custommax = 0;
            }
            ;
            if (custommin == null) {
                var custommin = 0;
            }
            ;
            if (customamount == null) {
                var customamount = 1;
            }
            ;
            if (custommin > custommax) {
                yield interaction.reply('A custom minimum cannot be greater than a custom maximum');
            }
            for (let i = 0; i < d4; i++) {
                total += rn({ min: 1, max: 4, integer: true });
            }
            ;
            for (let i = 0; i < d6; i++) {
                total += rn({ min: 1, max: 6, integer: true });
            }
            ;
            for (let i = 0; i < d8; i++) {
                total += rn({ min: 1, max: 8, integer: true });
            }
            ;
            for (let i = 0; i < d10; i++) {
                total += rn({ min: 1, max: 10, integer: true });
            }
            ;
            for (let i = 0; i < d12; i++) {
                total += rn({ min: 1, max: 12, integer: true });
            }
            ;
            for (let i = 0; i < d20; i++) {
                total += rn({ min: 1, max: 20, integer: true });
            }
            ;
            for (let i = 0; i < customamount; i++) {
                total += rn({ min: custommin, max: custommax, integer: true });
            }
            ;
            total += extraadd;
            total -= extraminus;
            yield interaction.reply(`:game_die: **${total}**`);
        });
    }
};
//# sourceMappingURL=dndrng.js.map