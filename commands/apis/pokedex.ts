const { SlashCommandBuilder } = require('discord.js');
const { CombineBot } = require('../../core/CombineBot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pokedex')
        .setDescription('Search the Pokedex for info on a Pokemon!')
        .addStringOption((option: any) =>
            option
                .setName('pokemon')
                .setDescription('Pokemon to get info of')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        await interaction.deferReply();
        const pokemon = interaction.options.getString('pokemon');
        const r = await CombineBot.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const status = r.status;
        if (status == 404) {
            await interaction.editReply(":x: Pokemon not found! Did you misspell it?");
            return;
        }
        const j = await r.json();
        let abilities = "";
        for (let ability of j.abilities) {
            abilities = abilities + `${ability.ability.name}`;
        }
        let embed = await CombineBot.embed();
        embed
            .setTitle(`Info on ${pokemon}`)
            .setFields(
                { name: 'Abilities', value: (abilities).toString() },
                { name: 'Base XP', value: (j.base_experience).toString() },
                { name: 'Order', value: (j.order).toString() },
                { name: 'Weight', value: (j.weight).toString() },
                { name: 'Height', value: (j.height).toString() }
            )
            .setThumbnail(j.sprites.front_default);
        await interaction.editReply({ embeds: [embed] });
    }
}

export {};
