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
        .setName('userinfo')
        .setDescription('Shows detailed info on a user')
        .addUserOption((option) => option
        .setName('user')
        .setDescription('User to get info on')
        .setRequired(true)),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = interaction.options.getUser('user');
            embed.setTitle(`Info on ${user.username}`);
            embed.setDescription(`Display Name: ${user.displayName}\nCreated at: ${user.createdAt}\nID: ${user.id}\nTag: ${user.tag}\nIs a Bot?: ${user.bot}`);
            embed.setThumbnail(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`);
            embed.setColor(0xffd700);
            yield interaction.reply({ embeds: [embed] });
        });
    },
};
//# sourceMappingURL=userinfo.js.map