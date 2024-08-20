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
module.exports = {
    data: new SlashCommandBuilder()
        .setName('disc2mbti')
        .setDescription('Convert your indigo DISC scores to MBTI!')
        .addNumberOption((option) => option
        .setName('d')
        .setDescription('Your Dominance Score')
        .setRequired(true))
        .addNumberOption((option) => option
        .setName('i')
        .setDescription('Your Influence Score')
        .setRequired(true))
        .addNumberOption((option) => option
        .setName('s')
        .setDescription('Your Steadiness Score')
        .setRequired(true))
        .addNumberOption((option) => option
        .setName('c')
        .setDescription('Your Compliance Score')
        .setRequired(true)),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const D = interaction.options.getNumber('d');
            const I = interaction.options.getNumber('i');
            const S = interaction.options.getNumber('s');
            const C = interaction.options.getNumber('c');
            if (D >= 50) {
                var tf = "T";
                var longtf = 'Thinking';
            }
            else {
                var tf = "F";
                var longtf = "Feeling";
            }
            ;
            if (I >= 50) {
                var ie = 'E';
                var longie = 'Extroverted';
            }
            else {
                var ie = 'I';
                var longie = 'Introverted';
            }
            ;
            if (S >= 50) {
                ;
                var jp = 'J';
                var longjp = 'Judging';
            }
            else {
                var jp = 'P';
                var longjp = 'Percieving';
            }
            ;
            if (C >= 50) {
                var sn = 'N';
                var longsn = 'Intuitive';
            }
            else {
                var sn = 'S';
                var longsn = 'Sensing';
            }
            ;
            yield interaction.reply(`Your MBTI is: **${ie}${sn}${tf}${jp}**`);
            yield interaction.channel.send(`*${longie}, ${longsn}, ${longtf}, and ${longjp}*`);
        });
    }
};
//# sourceMappingURL=disc2mbti.js.map