const { SlashCommandBuilder } = require('discord.js');
const { LATEST_ADDITION, VERSION, NAME } = require('./otherconfig.json')
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('About the bot'),
	async execute(interaction) {
        const aboutEmbed = new EmbedBuilder()
              .setColor(0xffd700)
              .setTitle(`About ${NAME} v${VERSION}`)
              .setDescription(`${NAME} is a discord bot written in JavaScript on discord.js, with many slash commands for moderation and fun!\n${NAME}'s birthday is **8/13/2024**.`)
              .setFields(
                   { name: "Latest Addition", value: `${LATEST_ADDITION}` }
              )
    .setThumbnail('https://cdn.discordapp.com/avatars/1254653481978167346/65b694dd9593cd55f3a49096f9a35319.png?size=1024')
		await interaction.reply({ embeds: [aboutEmbed] });
	},
};
