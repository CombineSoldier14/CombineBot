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
const { EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('createembed')
        .setDescription('Create your own embed!')
        .addStringOption((option) => option
        .setName('title')
        .setDescription('Title of embed')
        .setRequired(true))
        .addStringOption((option) => option
        .setName('description')
        .setDescription('Description of embed')
        .setRequired(true))
        .addStringOption((option) => option
        .setName('footer')
        .setDescription('Footer of embed')
        .setRequired(true)),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const title = interaction.options.getString('title');
            const description = interaction.options.getString('description');
            const footer = interaction.options.getString('footer');
            const embed = new EmbedBuilder()
                .setTitle(title)
                .setDescription(description)
                .setFooter({ text: footer });
            yield interaction.reply({ embeds: [embed] });
        });
    }
};
//# sourceMappingURL=createembed.js.map