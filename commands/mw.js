/*
    Author: Damian Dzik
    Date: 01/02/2022

    Desc: Embed with all viable mw guns
*/
const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: "mw",
    execute(msg) {
        const newEmbed = new MessageEmbed()
            .setColor('00D4FF')
            .setDescription("To find the build of choice type in !build.gunName (!build.kar98kmw)")
            .setTitle("Viable MW guns")
            .addFields({
                name: "kar98kmw",
                value: "MR",
                inline: true
            }, {
                name: "spr",
                value: "MR",
                inline: true
            }, {
                name: "kilo141",
                value: "AR",
                inline: true
            }, {
                name: "kilo141cqb",
                value: "AR",
                inline: true
            }, {
                name: "grau",
                value: "AR",
                inline: true
            }, {
                name: "ram7",
                value: "AR",
                inline: true
            }, {
                name: "ram7cqb",
                value: "AR",
                inline: true
            }, {
                name: "m13",
                value: "AR",
                inline: true
            }, {
                name: "m13cqb",
                value: "AR",
                inline: true
            }, {
                name: "asval",
                value: "AR",
                inline: true
            }, {
                name: "amax",
                value: "AR",
                inline: true
            }, {
                name: "m4a1",
                value: "AR",
                inline: true
            }, {
                name: "m4a1cqb",
                value: "AR",
                inline: true
            }, {
                name: "an94",
                value: "AR",
                inline: true
            }, {
                name: "ram7",
                value: "AR",
                inline: true
            }, {
                name: "mp5mw",
                value: "SMG",
                inline: true
            }, {
                name: "mp7",
                value: "SMG",
                inline: true
            }, {
                name: "p90",
                value: "SMG",
                inline: true
            }, {
                name: "uzi",
                value: "SMG",
                inline: true
            }, {
                name: "finnlmg",
                value: "LMG",
                inline: true
            }, {
                name: "sykov",
                value: "Pistol",
                inline: true
            }, {
                name: "vlkrogue",
                value: "Shotgun",
                inline: true
            }, {
                name: "jak12",
                value: "Shotgun",
                inline: true
            }, {
                name: "\u200B",
                value: "\u200B",
                inline: true
            });

        // creating the embed and sending it to the chat
        return msg.channel.send({
            embeds: [newEmbed]
        });
    }
}