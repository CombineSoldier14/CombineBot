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
        .setName('divide')
        .setDescription('Divides two numbers.')
        .addNumberOption((option) => option
        .setName('number1')
        .setDescription('First number to divide')
        .setRequired(true))
        .addNumberOption((option) => option
        .setName('number2')
        .setDescription('Second number to divide')
        .setRequired(true)),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const number1 = interaction.options.getNumber('number1');
            const number2 = interaction.options.getNumber('number2');
            if (number2 === 0) {
                yield interaction.reply(":x: You can't divide by zero, smarty!");
                return;
            }
            yield interaction.reply(`**${number1}** divided by **${number2}** = **${number1 / number2}**`);
        });
    }
};
//# sourceMappingURL=divide.js.map