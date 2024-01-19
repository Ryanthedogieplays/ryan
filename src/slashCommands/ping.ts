Wimport { SlashCommandBuilder, ChannelType, TextChannel, EmbedBuilder } from "discord.js"
import { SlashCommand } from "../types";

const testCommand: SlashCommand = {
    command: new SlashCommandBuilder()
        .setName("Ban Command")
        .setDescription("With this command, you can ban people")
        .addStringOption(option => {
            return option
                .setName("content")
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
                    .setAuthor({ name: "You have banned {user}! for {time}" })
                    .setDescription(` 
                    Your input: ${options.user, time}`)
            ]
        })
    },
    cooldown: 3
}

export default testCommand;
