const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cowsay')
		.setDescription('The classic Linux command, now in Discord!')
		.addStringOption((option: any) => 
			option
				.setName('text')
				.setDescription('Text for the cow to say!')
				.setRequired(true)
			
		),
		async execute(interaction: any) {
			const ctext = interaction.options.getString('text');
			await interaction.reply(`
			\`\`\`
			${cowsay.say(
				{
					text : ctext
				}
			)}
			\`\`\`
			`);
		}
}

export{};