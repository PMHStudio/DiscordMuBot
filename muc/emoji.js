/*
    μBot v7.0 Command.
    ---------------------
    PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
    Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
    
    * Requests Node.js & Discord.js
*/

const API = require("discord.js");
const superagent = require("superagent");
const randomHexColor = require("random-hex-color");

module.exports.run = async (mu, input, pars) => {
    let say = pars.join(" ").slice(0);
    superagent.get("https://discordemoji.com/api/").then((res) => {
        let emojis = res.body.slice();
        let picked = emojis.findIndex((o) => o.title === say);
        if (!emojis[picked]) {
            input.channel.send("Error 404: Emoji not found!");
        } else {
            let emojiUrl = emojis[picked].image;
            let emoji = new API.Attachment(emojiUrl);
            input.channel.send(emoji);
        }
    });
};

module.exports.help = {
    name: "이모티콘",
    description: "em"
};