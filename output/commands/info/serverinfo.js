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
module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Shows detailed info on the server you\'re in'),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            embed.setTitle(`Info on ${interaction.guild.name}`);
            embed.setDescription(`Created at: ${interaction.guild.createdAt}\nID: ${interaction.guild.id}\nMembers: ${interaction.guild.memberCount}`);
            embed.setThumbnail(`https://cdn.discordapp.com/icons/${interaction.guild.id}/${interaction.guild.icon}.png?size=1024`);
            embed.setColor(0xffd700);
            yield interaction.reply({ embeds: [embed] });
        });
    },
};
//# sourceMappingURL=serverinfo.js.map