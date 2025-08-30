const { Events } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
require('dotenv').config();


module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction: any) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		console.log(` - ${interaction.commandName} was just used! `)

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			const errorEmbed = new EmbedBuilder()
				.setColor(0x00FF0000)
				.setTitle('Whoops!')
				.setDescription('There was an error executing this command. Try again, or this could be an internal code error.')
				.setThumbnail('https://i.imgur.com/KR3aiwB.png');

			const reportErrorButton = new ButtonBuilder()
				.setCustomId('errorReporter')
				.setLabel('Report Error to CombineSoldier14')
				.setStyle(ButtonStyle.Primary)

			const reportGithubIssue = new ButtonBuilder()
				.setLabel('Open Github Issue')
				.setStyle(ButtonStyle.Link)
				.setURL('https://github.com/CombineSoldier14/CombineBot/issues/new')


			const errorRow = new ActionRowBuilder()
				.addComponents(reportErrorButton, reportGithubIssue)

			const response = await interaction.channel.send({ embeds: [errorEmbed], components: [errorRow] });
			const collectorFilter = (i: any) => i.user.id === interaction.user.id;

			const confirmation = await response.awaitMessageComponent({ filter: collectorFilter });

			if (confirmation.customId === 'errorReporter') {
				errorRow.components[0].setDisabled(true)
				errorRow.components[0].setLabel('Error Reported!')
				await interaction.editReply({ components: [errorRow] })
				await interaction.followUp({ content: 'Error has been reported!' });
				fetch(process.env.ERROR_WEBHOOK, {
					method: "POST",
					body: JSON.stringify({
				 	 content: `<@951639877768863754>\n# Error Occurred!\n Command: /${interaction.commandName}`
					}),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
						"User-Agent": "CombineBot (https://github.com/CombineSoldier14/CombineBot +combineemails14@gmail.com); curl/8.4.0",
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
	},
};
export {};
