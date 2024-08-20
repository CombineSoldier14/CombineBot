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
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
require('dotenv').config();
const learnmore = new ButtonBuilder()
    .setLabel('Learn More!')
    .setStyle(ButtonStyle.Link)
    .setURL('http://www.combinesoldier14.site/p/ultrabot-links-faq.html');
const ghbutton = new ButtonBuilder()
    .setLabel('GitHub')
    .setStyle(ButtonStyle.Link)
    .setURL('https://github.com/CombineSoldier14/CombineJS');
const invitebutton = new ButtonBuilder()
    .setLabel('Invite the bot!')
    .setStyle(ButtonStyle.Link)
    .setURL('https://shorturl.at/uFVo8');
const row = new ActionRowBuilder()
    .addComponents(learnmore, ghbutton, invitebutton);
module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('About the bot'),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const aboutEmbed = new EmbedBuilder()
                .setColor(0xffd700)
                .setTitle(`About ${process.env.NAME} v${process.env.VERSION}`)
                .setDescription(`${process.env.NAME} is a discord bot written in JavaScript on discord.js, with many slash commands for moderation and fun!\n${process.env.NAME}'s birthday is **8/13/2024**.`)
                .setFields({ name: "Latest Addition", value: `${process.env.LATEST_ADDITION}` })
                .setThumbnail('https://cdn.discordapp.com/avatars/1254653481978167346/65b694dd9593cd55f3a49096f9a35319.png?size=1024');
            yield interaction.reply({ embeds: [aboutEmbed], components: [row] });
        });
    },
};
//# sourceMappingURL=about.js.map