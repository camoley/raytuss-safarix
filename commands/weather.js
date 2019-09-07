const weather = require('weather-js');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 

        if (result === undefined || result.length === 0) { 
          message.channel.send(':warning: **Lütfen geçerli bir konum girin!**') 
          return; 
      }
    
      // Variables
      var current = result[0].current; 
      var location = result[0].location; 
    
      
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`) 
          .setAuthor(`${current.observationpoint} İçin Hava Durumu`) 
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86) 
          .addField('Saat Dilimi',`UTC${location.timezone}`, true) 
          .addField('Derece Türü',location.degreetype, true)
          .addField('Sıcaklık',`${current.temperature} Derece`, true)
          .addField('Hissedilen', `${current.feelslike} Derece`, true)
          .addField('Rüzgar',current.winddisplay, true)
          .addField('Nem', `${current.humidity}%`, true)
    
          message.channel.send({embed});
    });

    
}