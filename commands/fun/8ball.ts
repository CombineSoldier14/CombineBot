const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');
const { eightball_list } = require('../../core/lists.js')
const rn = require('random-number');

const options = {
    min: 0, 
    max: eightball_list.length,
    integer: true
  }

var eight_choice = eightball_list[rn(options)]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Roll the Magic 8 Ball!')
        .addStringOption((option: any) =>
            option
                .setName('question')
                .setDescription('Question to ask the 8 ball')
                .setRequired(true)
        ),

    async execute(interaction: any) {
        const question = interaction.options.getString('question')
        let embed = await CombineBot.embed();
        embed.setTitle(question)
        embed.setDescription(eight_choice)
        embed.setColor(0x696969)
        embed.setThumbnail('https://icons.iconarchive.com/icons/barkerbaggies/pool-ball/256/Ball-8-icon.png')
        await interaction.reply({ embeds: [embed] })
    }
}
export {};
