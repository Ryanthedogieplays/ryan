import { SlashCommandBuilder, TextChannel, MessageEmbed } from "discord.js";
import { SlashCommand } from "../types";

const testCommand: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName("BanCommand")
        .setDescription("With this command, you can ban people")
        .addStringOption(option => {
            return option
                .setName("content")
                .setDescription("This is a parameter for a command")
                .setRequired(false);
        }),
    execute: async (interaction) => {
        const options: { [key: string]: string | number | boolean } = {};
        for (let i = 0; i < interaction.options.data.length; i++) {
            const element = interaction.options.data[i];
            if (element.name && element.value) options[element.name] = element.value;
        }

        // Replace {user} and {time} with actual values
        const embed = new MessageEmbed()
            .setAuthor("You have banned {user}! for {time}")
            .setDescription(`Your input: ${options.user}`);

        interaction.reply({
            embeds: [embed],
        });
    },
    cooldown: 3
};

export default testCommand;
