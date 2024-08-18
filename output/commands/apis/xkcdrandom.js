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
const { get, embed } = require('../../core/combinejs.js');
const rn = require('random-number');
const options = {
    min: 1,
    max: 2973,
    integer: true
};
module.exports = {
    data: new SlashCommandBuilder()
        .setName('xkcdrandom')
        .setDescription('Get a random XKCD comic!'),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield get(`https://xkcd.com/${rn(options)}/info.0.json`);
            const response = yield request.json();
            embed.setTitle(`#${response.num} - ${response.title}`);
            embed.setDescription(`${response.alt}`);
            embed.setFooter({ text: `${response.month}/${response.day}/${response.year}` });
            embed.setImage(response.img);
            yield interaction.reply({ embeds: [embed] });
        });
    }
};
//# sourceMappingURL=xkcdrandom.js.map