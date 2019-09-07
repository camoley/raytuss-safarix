const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');


const ownerID = '278590588390211595';
const active = new Map();

const serverStats = {
    guildID: '552114578591449088',
    totalUsersID: '618542368118931506',
//    memberCountID: '534076726712598528',
//    botCountID: '534076846438875156'
};


const botStats = {
    totalGuildsID: '618528739046850560',
//    totalUsersID: '486539418531004419',
//    totalChannelsID: '486539459651960833'
};

//-------------------------------------------------------------------------------------------------\\

client.on('message', message => {

    if (!message.guild) return;

    let prefixes = JSON.parse(fs.readFileSync('Storage/prefixes.json', 'utf8'));

    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: '-'
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;

    //-------------------------------------------------------------------------------------------------\\

    //Veriables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    //Command Handler
    try {

        //auto-Reload
        delete require.cache[require.resolve(`./commands/${cmd}.js`)]

        //Options
        let ops = {
            ownerID: ownerID,
            active: active,
            prefix: prefix
        }

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, ops);

    } catch (e) {
        console.log(e.stack);
    }
});

//-------------------------------------------------------------------------------------------------\\

client.on('message', message => {
    if (message.author.bot) return;
    if(message.author.id == ownerID) return;

    let blacklisted = ['discord.gg', 'discordapp.com'];
    let foundInText = false;
    for (var i in blacklisted) {
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }

    if (foundInText) {
        message.delete();
        message.reply(':warning: **Link paylaşmak yasak!**')
    }
});

//-------------------------------------------------------------------------------------------------\\

client.on('message', message => {
    if (message.author.bot) return;

    let xp = JSON.parse(fs.readFileSync('Storage/xp.json', 'utf8'));
    let xpAdd = Math.floor(Math.random() * 7) + 8;

    if (!xp[message.author.id]) {
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }

    let curxp = xp[message.author.id].xp;
    let curLvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;

    xp[message.author.id].xp = curxp + xpAdd;

    if (nxtLvl <= xp[message.author.id].xp) {
        xp[message.author.id].level = curLvl + 1;

        let lvlup = new Discord.RichEmbed()
            .setColor('#d604cf')
            .addField('Yeni Level', curLvl + 1)
            .setFooter(message.author.username, message.author.displayAvatarURL)

        message.channel.send(lvlup);
    }
    fs.writeFile("Storage/xp.json", JSON.stringify(xp), (err) => {
        if (err) console.log(err)
    });
});

//-------------------------------------------------------------------------------------------------\\

let log = message => console.log("\x1b[31m[DEBUG]\x1b[0m", message);

client.on("ready", () => {

    log(`${client.user.tag} has started with ${client.guilds.size} guilds and ${client.users.size} users .`);

//    client.user.setActivity("camoley#4464'ü", { type: "LISTENING" })

});

client.on('debug', Obj => {
    if (Obj.indexOf("Heartbeat acknowledged") == -1 && Obj.indexOf("Sending a heartbeat") == -1)
        console.log("\x1b[34m[DEBUG]\x1b[0m", Obj)
});


client.on('guildCreate', guild => {
    client.channels.get(botStats.totalGuildsID).setName(`📊 Toplam Sunucu : ${client.guilds.size}`);
//    client.channels.get(botStats.totalUsersID).setName(`📋 Toplam Üye : ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}`);
//    client.channels.get(botStats.totalChannelsID).setName(`📥 Toplam Kanal : ${client.channels.size}`);
});

client.on('guildDelete', guild => {
    client.channels.get(botStats.totalGuildsID).setName(`📊 Toplam Sunucu : ${client.guilds.size}`);
//    client.channels.get(botStats.totalUsersID).setName(`📋 Toplam Üye : ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}`);
//    client.channels.get(botStats.totalChannelsID).setName(`📥 Toplam Kanal : ${client.channels.size}`);
});

client.on('guildMemberAdd', member => {
  
  if(member.guild.id !== serverStats.guildID) return;
  
    client.channels.get(serverStats.totalUsersID).setName(`📋 Toplam Üye : ${member.guild.memberCount}`);
    //client.channels.get(serverStats.memberCountID).setName(`📋 Üye Sayısı : ${member.guild.members.filter(m => !m.user.bot).size}`);
    //client.channels.get(serverStats.botCountID).setName(`📥 Bot Sayısı : ${member.guild.members.filter(m => m.user.bot).size}`);
});

client.on('guildMemberRemove', member => {
  
    if(member.guild.id !== serverStats.guildID) return;
  
    client.channels.get(serverStats.totalUsersID).setName(`📋 Toplam Üye : ${member.guild.memberCount}`);
    //client.channels.get(serverStats.memberCountID).setName(`📋 Üye Sayısı : ${member.guild.members.filter(m => !m.user.bot).size}`);
    //client.channels.get(serverStats.botCountID).setName(`📥 Bot Sayısı : ${member.guild.members.filter(m => m.user.bot).size}`);
});

client.login("TOKEN");