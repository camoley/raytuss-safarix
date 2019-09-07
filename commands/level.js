const Discord = require('discord.js');
const fs = require('fs');

let purple = ('#d604cf')

let xp = JSON.parse(fs.readFileSync('Storage/xp.json', 'utf8'));

exports.run = async (client, message, args, ops) => {
    if(!xp[message.author.id]) {
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }

    let curxp = xp[message.author.id].xp;
    let curLvl= xp[message.author.id].level;
    let nxtLvlXp = curLvl * 300;
    let difference = nxtLvlXp - curxp;

    let lvlEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(purple)
    .addField('Level', curLvl, true)
    .addField('XP', curxp, true)
    .setFooter(`Sonraki Level için gereken XP : ${difference}`, message.author.displayAvatarURL);

    message.channel.send(lvlEmbed);
}