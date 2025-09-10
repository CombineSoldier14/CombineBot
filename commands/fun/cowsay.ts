const { SlashCommandBuilder } = require('discord.js');
const cowsay = require("cowsay");

let cowNames = [];
cowsay.list((err: any, names: string[]) => {
	if (err) {
		console.error(err);
	} else {
		for (let i = 0; i < names.length; i++) {
			cowNames.push({ name: names[i], value: names[i] });
		}
	}
});

console.log(cowNames);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cowsay')
		.setDescription('The classic Linux command, now in Discord!')
		.addStringOption((option: any) => 
			option
				.setName('text')
				.setDescription('Text for the cow to say!')
				.setRequired(true)
		)
		.addStringOption((option: any) =>
			option
				.setName('cow')
				.setDescription('The cow to use! If left empty this will be the default cow.')
				.setRequired(false)
				.setChoices(
					{ name: 'C3PO', value: 'C3PO' },
  { name: 'R2-D2', value: 'R2-D2' },
  { name: 'ackbar', value: 'ackbar' },
  { name: 'aperture', value: 'aperture' },
  { name: 'awesome-face', value: 'awesome-face' },
  { name: 'beavis.zen', value: 'beavis.zen' },
  { name: 'black-mesa', value: 'black-mesa' },
  { name: 'bong', value: 'bong' },
  { name: 'box', value: 'box' },
  { name: 'cake-with-candles', value: 'cake-with-candles' },
  { name: 'cat', value: 'cat' },
  { name: 'clippy', value: 'clippy' },
  { name: 'companion-cube', value: 'companion-cube' },
  { name: 'cowfee', value: 'cowfee' },
  { name: 'daemon', value: 'daemon' },
  { name: 'docker-whale', value: 'docker-whale' },
  { name: 'doge', value: 'doge' },
  { name: 'fat-cow', value: 'fat-cow' },
  { name: 'ghostbusters', value: 'ghostbusters' },
  { name: 'glados', value: 'glados' },
  { name: 'hedgehog', value: 'hedgehog' },
  { name: 'homer', value: 'homer' },
  { name: 'ibm', value: 'ibm' },
  { name: 'karl_marx', value: 'karl_marx' },
				)
		),
	async execute(interaction: any) {
		const ctext = interaction.options.getString('text');
		const cow = interaction.options.getString('cow') || 'default';
		await interaction.reply(`
		\`\`\`
		${cowsay.say(
			{
				text: ctext,
				f: cow
			}
		)}
		\`\`\`
		`);
	}
}

export{};