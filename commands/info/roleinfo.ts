const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roleinfo')
        .setDescription('Get information about a role.')
        .addRoleOption((option: any) =>
            option.setName('role')
                .setDescription('The role to get information about.')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        const role = interaction.options.getRole('role');
        let embed = await CombineBot.embed();
        embed.setTitle('Information about ' + role.name);
        embed.setFields(
            { name: 'Name', value: (role.name).toString() },
            { name: 'ID', value: (role.id).toString() },
            { name: 'Color', value: (role.hexColor).toString() },
            { name: 'Position', value: (role.position).toString() },
            { name: 'Mentionable', value: (role.mentionable).toString() },
            { name: 'Managed', value: (role.managed).toString() },
            { name: 'Hoisted', value: (role.hoist).toString() },
            { name: 'Created at', value: (role.createdAt).toString() }
        );
        await interaction.reply({ embeds: [embed] });
    }
}

export {};