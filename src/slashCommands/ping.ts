import { SlashCommandBuilder, ChannelType, TextChannel, EmbedBuilder } from "discord.js"
import { SlashCommand } from "../types";

const testCommand: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName("DutyState")
        .setDescription("Please state your duty will FULL PROOF that you did")
        .addStringOption(option => {
            return option
                .setName("Please imput your username")
                .setDescription("this is a parameter for a command")
                .setRequired(false);
        }),
    execute: async (interaction) => {
        const options: { [key: string]: string | number | boolean } = {};
        for (let i = 0; i < interaction.options.data.length; i++) {
            const element = interaction.options.data[i];
            if (element.name && element.value) options[element.name] = element.value;
        }

        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: "Duty State" })
                    .setDescription(`Thank you for sumbitting your duty state, our high command will deal with your state! 
                    Your input: ${options.content}`)
            ]
        })
    },
    cooldown: 3
}

export default testCommand;
