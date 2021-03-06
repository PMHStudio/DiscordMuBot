/*
    μBot v7.0 Command.
    ---------------------
    PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆ 
    Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
    
    * Requests Node.js & Discord.js
*/

const API = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (mu, input, pars) => {
    superagent.get("https://api.heroku.com/apps/mubotapi/builds")
    .set("Accept", "application/json;version=3").set("Authorization", `Bearer ${process.env.muhu}`).then((res) => {
        let herokuEmb = new API.RichEmbed()
        .setColor("#6762a6")
        .setTitle("Heroku `μBot 빌드정보`")
        .setTimestamp(mu.readyAt)
        .setThumbnail("http://www.stickpng.com/assets/images/58480873cef1014c0b5e48ea.png")
        .setDescription(`현재 사용중인 μBot은 정식 승인된 개발자인\n${res.body.slice(-1)[0].user.email}으로부터 \n${mu.readyAt}에 빌드된\n${res.body.slice(-1)[0].source_blob.version}버전을 사용하여\n빌드에 ${res.body.slice(-1)[0].status}된 버전을 사용중입니다`);
        input.channel.send(herokuEmb);
    }).catch((err) => console.log(err));
};

module.exports.help = {
    name: "빌드",
    description: "빌드정보"
};