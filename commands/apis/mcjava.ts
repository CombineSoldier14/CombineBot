const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');
const { MinecraftServerListPing } = require("minecraft-status");

module.exports = {
    data: new SlashCommandBuilder()
            .setName('mcjava')
            .setDescription('Get information about a Java Minecraft server')
            .addStringOption((option: any) =>
                option
                    .setName('address')
                    .setDescription('Address of the server')
                    .setRequired(true)
            )
            .addNumberOption((option: any) =>
                option
                    .setName('port')
                    .setDescription('Port of the server')
            ),
    async execute(interaction: any) {
        await interaction.deferReply();
        const address = interaction.options.getString('address');
        const port = interaction.options.getNumber('port') || 25565;
        let response;
        try {
            response = await MinecraftServerListPing.ping(4, address, port, 3000);
            console.log(response);
        } catch (error) {
            await interaction.editReply(`:x: There was an issue receiving data! Does the server exist?`);
            return;
        }
        const embed = await CombineBot.embed();
        embed
            .setTitle(response.description.replace(/§[0-9a-fk-or]/g, ""))
            .addFields(
                { name: 'Players', value: `${(response.players.online).toString().replace(/§[0-9a-fk-or]/g, "")}/${(response.players.max).toString().replace(/§[0-9a-fk-or]/g, "")}` },
                { name: 'Version', value: (response.version.name).toString().replace(/§[0-9a-fk-or]/g, "") },
                { name: 'Protocol', value: (response.version.protocol).toString().replace(/§[0-9a-fk-or]/g, "") },
            );
            embed.setThumbnail("https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png");
        await interaction.editReply({ embeds: [embed] });
    }
}

export {};