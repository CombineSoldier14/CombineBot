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
let Parser = require('rss-parser');
let parser = new Parser();
module.exports = {
    data: new SlashCommandBuilder()
        .setName('rss')
        .setDescription('Get the contents of an RSS link!')
        .addStringOption((option) => option
        .setName('rsslink')
        .setDescription('Link to RSS')
        .setRequired(true)),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const rsslink = interaction.options.getString('rsslink');
            const feed = yield parser.parseURL(rsslink);
            let fields = [];
            feed.items.forEach((item) => fields.push({ name: item.title, value: `[Link to post](${item.link})` }));
            embed.setTitle(feed.title);
            if (feed.description = null) {
                var desc = "";
            }
            else {
                var desc = feed.description;
            }
            embed.setDescription(desc);
            embed.setFields(fields);
            yield interaction.reply({ embeds: [embed] });
        });
    }
};
//# sourceMappingURL=rss.js.map