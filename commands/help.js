/*
    Author: Damian Dzik
    Date: 03/02/2022

    Desc: Embed with all the commands
*/
const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: "help",
    execute(msg) {
        const newEmbed = new MessageEmbed()
            .setColor('a7fc00')
            .setDescription("All commands that the bot can execute")
            .setTitle("Commands")
            .addFields({
                name: "!cod.help",
                value: "Displays all commands"
            }, {
                name: "!wz.meta",
                value: "Displays all Meta guns in warzone"
            }, {
                name: "!cod.mw",
                value: "Displays all viable Modern Warfare guns in warzone"
            }, {
                name: "!cod.cw",
                value: "Displays all viable Cold War guns in warzone"
            }, {
                name: "!cod.vg",
                value: "Displays all viable Vanguard guns in warzone"
            }, {
                name: "!build.gunName",
                value: "Display gun build for said gun \n !build.kar98kmw"
            });

        // creating the embed and sending it to the chat
        return msg.channel.send({
            embeds: [newEmbed]
        });
    }
}