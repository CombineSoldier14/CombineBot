const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
require('dotenv').config();

const learnmore = new ButtonBuilder()
     .setLabel('Learn More!')
     .setStyle(ButtonStyle.Link)
     .setURL('http://www.combinesoldier14.site/p/ultrabot-links-faq.html')

const ghbutton = new ButtonBuilder()
     .setLabel('GitHub')
     .setStyle(ButtonStyle.Link)
     .setURL('https://github.com/CombineSoldier14/CombineJS')

const invitebutton = new ButtonBuilder()
     .setLabel('Invite the bot!')
     .setStyle(ButtonStyle.Link)
     .setURL('https://shorturl.at/uFVo8')

const row = new ActionRowBuilder()
     .addComponents(learnmore, ghbutton, invitebutton)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('About the bot'),
	async execute(interaction: any) {
          await interaction.channel.send('Loading data...').then (async (msg) => {
          msg.delete();
          const latency = `${msg.createdTimestamp - interaction.createdTimestamp} ms`
          const aboutEmbed = new EmbedBuilder()
              .setColor(0xffd700)
              .setTitle(`About ${process.env.NAME} v${process.env.VERSION}`)
              .setDescription(`${process.env.NAME} is a discord bot written in JavaScript on discord.js, with many slash commands for moderation and fun!\n${process.env.NAME}'s birthday is **8/13/2024**.`)
              .setFields(
                   { name: "Latest Addition", value: `${process.env.LATEST_ADDITION}` },
                   { name: "Ping/Latency :ping_pong:", value: latency }
              )
              .setThumbnail('https://cdn.discordapp.com/avatars/1254653481978167346/65b694dd9593cd55f3a49096f9a35319.png?size=1024')
		await interaction.reply({ embeds: [aboutEmbed], components: [row] });
        });
	},
};
export {};