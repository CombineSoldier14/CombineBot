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
const { embed } = require('../../core/combinejs.js');
const { eightball_list } = require('../../core/lists.js');
const rn = require('random-number');
const options = {
    min: 0,
    max: eightball_list.length,
    integer: true
};
var eight_choice = eightball_list[rn(options)];
module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Roll the Magic 8 Ball!')
        .addStringOption((option) => option
        .setName('question')
        .setDescription('Question to ask the 8 ball')
        .setRequired(true)),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const question = interaction.options.getString('question');
            embed.setTitle(question);
            embed.setDescription(eight_choice);
            embed.setColor(0x696969);
            embed.setThumbnail('https://icons.iconarchive.com/icons/barkerbaggies/pool-ball/256/Ball-8-icon.png');
            yield interaction.reply({ embeds: [embed] });
        });
    }
};
//# sourceMappingURL=8ball.js.map