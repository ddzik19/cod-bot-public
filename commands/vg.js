/*
    Author: Damian Dzik
    Date: 03/02/2022

    Desc: Embed with all viable vanguard guns
*/
const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: "vg",
    execute(msg) {
        const newEmbed = new MessageEmbed()
            .setColor('FFFB00')
            .setDescription("To find the build of choice type in !build.gunName (!build.kar98kvg)")
            .setTitle("Viable VG guns")
            .addFields({
                name: "kar98kvg",
                value: "SR",
                inline: true
            }, {
                name: "bren",
                value: "LMG",
                inline: true
            }, {
                name: "sten",
                value: "SMG",
                inline: true
            }, {
                name: "welgun",
                value: "SMG",
                inline: true
            }, {
                name: "mp40",
                value: "SMG",
                inline: true
            }, {
                name: "owengun",
                value: "SMG",
                inline: true
            }, {
                name: "ppshvgads",
                value: "SMG",
                inline: true
            }, {
                name: "ppshvghipfire",
                value: "SMG",
                inline: true
            }, {
                name: "doublebarrel",
                value: "Shotgun",
                inline: true
            }, {
                name: "stg44",
                value: "AR",
                inline: true
            }, {
                name: "volk",
                value: "AR",
                inline: true
            }, {
                name: "coopercarabine",
                value: "AR",
                inline: true
            }, {
                name: "automaton",
                value: "AR",
                inline: true
            }, {
                name: "kgm40",
                value: "AR",
                inline: true
            });

        // creating the embed and sending it to the chat
        return msg.channel.send({
            embeds: [newEmbed]
        });
    }
}