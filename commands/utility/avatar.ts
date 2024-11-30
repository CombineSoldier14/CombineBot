const { SlashCommandBuilder } = require('discord.js');
const { CombineJS } = require('../../core/combinejs.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get the avatar of a user!')
        .addUserOption((option: any) =>
            option
                .setName('user')
                .setDescription('User to get avatar of')
                .setRequired(true)

        ),
    async execute (interaction: any) {
        const user = interaction.options.getUser('user');
        let embed = await CombineJS.embed();
        embed.setTitle(`${user.username}'s avatar`);
        embed.setImage(`https://cdn.discordapp.com/avatars/${String(user.id)}/${String(user.avatar)}.png?size=1024`);
        await interaction.reply({ embeds: [embed] });
    },
};

export {};
