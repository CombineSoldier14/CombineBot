const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick a user.')
        .addUserOption((option: any) =>
            option.setName('user')
                .setDescription('The user to kick.')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        const user = interaction.options.getUser('user');
        const member = interaction.guild.members.cache.get(user.id);
        if (member.kickable) {
            member.kick();
            await interaction.reply({ content: `Kicked ${user.username}.`, ephemeral: true });
        } else {
            await interaction.reply({ content: `I cannot kick ${user.username}. They have a higher role than me.`, ephemeral: true });
        }
    }
}

export {};