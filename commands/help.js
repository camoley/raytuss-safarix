const Discord = require('discord.js');
const fs = require('fs');

const commands = JSON.parse(fs.readFileSync('Storage/commands.json', 'utf8'));

exports.run = async (client, message, args, ops) => {

   

        // Variables
        let msg = message.content.toLowerCase(); 

        if (!message.guild) return;
    
        if (msg.startsWith(ops.prefix + 'help')) {
    
        if (msg === `${ops.prefix}help`) { 
    
          
            const embed = new Discord.RichEmbed()
                .setColor(0x1D82B6) 
    
            // Variables
            let commandsFound = 0; 
    
            
            for (var cmd in commands) { 
    
                
                if (commands[cmd].group.toUpperCase() === 'USER') {
                   
                    commandsFound++
                    
                    embed.addField(`${commands[cmd].name}`, `**Açıklama:** ${commands[cmd].desc}\n**Kullanım:** ${ops.prefix + commands[cmd].usage}`); 
                }
    
            }
    
           
            embed.setFooter(`Kullanıcı komutları gösteriliyor. Diğer komutları ve grupları görmek için => ${ops.prefix}help [grup / komut]`)
            embed.setDescription(`**${commandsFound} komut bulundu!**`)
    
           
            message.author.send({embed})
            
            message.channel.send({embed: {
                color: 0x1D82B6,
                description: `**DM'ni kontrol et ${message.author}!**`
            }})
    
    
    
        } else if (args.join(" ").toUpperCase() === 'GROUPS') {
    
            // Variables
            let groups = '';
    
            for (var cmd in commands) {
                if (!groups.includes(commands[cmd].group)) {
                    groups += `${commands[cmd].group}\n`
                }
            }
    
            message.channel.send({embed: {
                description:`**${groups}**`,
                title:"Groups",
                color: 0x1D82B6
            }})
    
            return; 
    
    
        } else {
            
    
            // Variables
            let groupFound = '';
    
            for (var cmd in commands) { 
    
                if (args.join(" ").trim().toUpperCase() === commands[cmd].group.toUpperCase()) {
                    groupFound = commands[cmd].group.toUpperCase(); 
                    break;
                }
    
            }
    
            if (groupFound != '') { 
    
                
                const embed = new Discord.RichEmbed()
                    .setColor(0x1D82B6) 
    
                // Variables
                let commandsFound = 0; 
    
    
                for (var cmd in commands) { 
    
                    
                    if (commands[cmd].group.toUpperCase() === groupFound) {
                      
                        commandsFound++
                       
                        embed.addField(`${commands[cmd].name}`, `**Açıklama:** ${commands[cmd].desc}\n**Kullanım:** ${ops.prefix + commands[cmd].usage}`);
                    }
    
                }
    
              
                embed.setFooter(`${groupFound} komutları gösteriliyor! Diğer grupları görmek için => ${ops.prefix}help [grup / komut]`)
                embed.setDescription(`**${commandsFound} komut bulundu!**`)
    
              
                message.author.send({embed})
                
                message.channel.send({embed: {
                    color: 0x1D82B6,
                    description: `**DM'ni kontrol et ${message.author}!**`
                }})
    
               
                return; 
    
                
            }
            
            // Variables
            let commandFound = '';
            let commandDesc = '';
            let commandUsage = '';
            let commandGroup = '';
    
            for (var cmd in commands) { 
    
                if (args.join(" ").trim().toUpperCase() === commands[cmd].name.toUpperCase()) {
                    commandFound = commands[cmd].name; 
                    commandDesc = commands[cmd].desc;
                    commandUsage = commands[cmd].usage;
                    commandGroup = commands[cmd].group;
                    break;
                }
    
            }
    
            
            if (commandFound === '') {
                message.channel.send({embed: {
                    description:`**\`${args.join(" ")}\`başlıklı grup veya komut bulunamadı**`,
                    color: 0x1D82B6,
                }})
    
            }
    
            
            message.channel.send({embed: {
                title:' ',
                color: 0x1D82B6,
                fields: [{
                    name:commandFound,
                    value:`**Açıklama:** ${commandDesc}\n**Kullanım:** ${commandUsage}\n**Grup:** ${commandGroup}`
                }]
            }})
    
            return; 
    
            }  
        }
    
    
}