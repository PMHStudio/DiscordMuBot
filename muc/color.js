/*
  μBot v8.0 Command.
  ---------------------
  PMH Studio / Proj- μBot | Smart & Cute Discord Bot_Mu~☆
  Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.

  * Requests Node.js & Discord.js
*/

const sharp = require('sharp')

module.exports.run = async (mu, input, pars) => {
  let say = pars.join(' ').slice(0)
  if (!say) {
    input.channel.send('nu!컬러 <16진수 색상>')
  } else {
    let temp = Buffer.from('<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" \n"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="1080px" height="1080px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink"><rect x="0" y="0" width="1080" height="1080" fill="' + say + '"/></svg>')
    sharp(temp)
      .toFile('./temp.png')
      .then(() => {
        input.channel.send({
          files: [{
            attachment: './temp.png',
            name: 'temp.jpg'
          }]
        })
      })
  }
}

module.exports.help = {
  name: '컬러'
}