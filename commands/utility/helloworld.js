const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('helloworld')
		.setDescription('If your program can\'t say this, don\'t talk to me.'),
	async execute(interaction) {
		await interaction.reply(':earth_americas: Hello world!');
	},
};
