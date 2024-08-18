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
const { Events } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
require('dotenv').config();
module.exports = {
    name: Events.InteractionCreate,
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!interaction.isChatInputCommand())
                return;
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }
            try {
                yield command.execute(interaction);
            }
            catch (error) {
                console.error(error);
                const errorEmbed = new EmbedBuilder()
                    .setColor(0x00FF0000)
                    .setTitle('Whoops!')
                    .setDescription('There was an error executing this command. Try again, or this could be an internal code error.')
                    .setThumbnail('https://i.imgur.com/KR3aiwB.png');
                const reportErrorButton = new ButtonBuilder()
                    .setCustomId('errorReporter')
                    .setLabel('Report Error to CombineSoldier14')
                    .setStyle(ButtonStyle.Primary);
                const reportGithubIssue = new ButtonBuilder()
                    .setLabel('Open Github Issue')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://github.com/CombineSoldier14/CombineJS/issues/new');
                const errorRow = new ActionRowBuilder()
                    .addComponents(reportErrorButton, reportGithubIssue);
                const response = yield interaction.channel.send({ embeds: [errorEmbed], components: [errorRow] });
                const collectorFilter = (i) => i.user.id === interaction.user.id;
                const confirmation = yield response.awaitMessageComponent({ filter: collectorFilter });
                if (confirmation.customId === 'errorReporter') {
                    errorRow.components[0].setDisabled(true);
                    errorRow.components[0].setLabel('Error Reported!');
                    yield interaction.editReply({ components: [errorRow] });
                    yield interaction.followUp({ content: 'Error has been reported!' });
                    fetch(process.env.ERROR_WEBHOOK, {
                        method: "POST",
                        body: JSON.stringify({
                            content: `<@951639877768863754>\n# Error Occurred!\n Command: /${interaction.commandName}`
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            "User-Agent": "CombineJS (https://github.com/CombineSoldier14/CombineJS +combineemails14@gmail.com); curl/8.4.0",
                            "Accept": "application/json,text/plain,application/xml",
                            "Upgrade-Insecure-Requests": "1",
                            "Accept-Encoding": "gzip",
                            "Connection": "close"
                        }
                    })
                        .then((response) => response.json())
                        .then((json) => console.log(json));
                }
            }
        });
    },
};
//# sourceMappingURL=interactionCreate.js.map