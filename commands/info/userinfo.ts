const { SlashCommandBuilder } = require('discord.js');
const { embed } = require('../../core/combinejs.ts');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Shows detailed info on a user')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('User to get info on')
                .setRequired(true)
        ),
    async execute (interaction) {
        const user = interaction.options.getUser('user')
            embed.setTitle(`Info on ${user.username}`)
            embed.setDescription(`Display Name: ${user.displayName}\nCreated at: ${user.createdAt}\nID: ${user.id}\nTag: ${user.tag}\nIs a Bot?: ${user.bot}`)
            embed.setThumbnail(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`)
            embed.setColor(0xffd700)
        await interaction.reply({ embeds: [embed] })
    },
};
export {};