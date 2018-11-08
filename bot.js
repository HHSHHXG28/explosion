const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
const dev = client.users.get("410778583682777098");



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`${client.user.username}`,"https://twitch.tv//9ivv")
  console.log('')
  console.log('')
  console.log('╔[════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged i as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informatins :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {

if(message.author.id === "410778583682777098") {
  if (!message.content.startsWith(prefix)) return;
  let args = message.content.split(' ').slice(1);
  let argresult = args.join(' ');


  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watching Now: **${argresult}**`)
}


  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
}


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply(".");
}

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}**`)
}
if (message.content.startsWith(prefix + 'setplay')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}**`)
}
}

});
/*====================================
==================================*/


client.on("message", msg => {
    if(msg.content.startsWith(prefix + "report")) {
        if(!message.channel.guild) return msg.channel.send("**Servers Only. :no_entry:**");
            let reports = msg.guild.channels.find(a => a.name === "reports");
            let reported = msg.mentions.users.first();
            let args = msg.content.split(' ').slice(1);
            let reason = args[2];
        if(!reported) {
            return msg.channel.send("**Mention someone to report. :x:**");
        }
        if(!reports) {
                msg.guild.createChannel("reports", "text").then((r) => {
                    r.overwritePermissions(msg.guild.id, {
                        READ_MESSAGES: false
                    }).then(() => {
                        let reports = r;
                            if(!reason) {
                        return msg.channel.send("**Please provide a vaild reason. :x:**");
                    }
                    let proof = msg.attachments.first();
                        let report = new Discord.RichEmbed()
                            .setTitle("❆ Report.")
                            .setDescription(`\n» Author:\n[ ${msg.author} ]\n» Reported-User:\n[ ${reported} ]\n» Reported-In:\n${msg.channel.name}\n» Reason:\n[ ${reason} ]`)
                            .setColor("BLACK")
                            .setFooter(client.user.username, client.user.displayAvatarURL);

                            reports.sendEmbed(report);
                                if(proof) {
                                    reports.sendFile(proof.url).catch();
                                }

                    });

                })
        }
    }
});

client.on('ready', async () => {
  let guild = client.guilds.get("439182014231347210");
  setInterval(function(){
      guild.channels.find(a => a.id === "506200318082547722").setName(`❆ Voice: [ ${guild.members.filter(a => a.voiceChannel).size} ]`);
  }, 1000);
  });

  client.on('ready', async () => {
    let guild = client.guilds.get("439182014231347210");
    setInterval(function(){
        guild.channels.find(a => a.id === "506200659968655381").setName(`❆  MembersCount: [ ${guild.members.size} ]`);
    }, 1000);
    });




        client.on('ready',async () => {
          setInterval(function(){
          var currentTime = new Date(),
          hours = currentTime.getHours() + 3 ,
          ReBeeL = currentTime.getMinutes(),
          ReBeeeL = currentTime.getSeconds(),
          Codes = currentTime.getFullYear(),
          CodeS = currentTime.getMonth() + 1,
          CoDeS = currentTime.getDate()
          if (ReBeeL < 10) {
          ReBeeL = "0" + ReBeeL;
          }
          var suffix = "AM";
          if (hours >= 12) {
          suffix = "PM";
          hours = hours - 12;
          }
          if (hours == 0) {
          hours = 12;
          }
          client.channels.find('id', '506211479582932992').setName(`❆ Time: ${hours} : ${ReBeeL} : ${ReBeeeL} ${suffix}`) 
          client.channels.find('id', '506211562231562259').setName(`❆ Date: ${Codes} - ${CodeS} - ${CoDeS}`)
          }, 1000);
          });
          
        
client.on("message", message => {
  if(message.content.startsWith(prefix + "help")) {
    if(!message.channel.guild) return message.channel.send("**Servers Only. :no_entry:**");
       if(message.guild.id !== "439182014231347210") return message.channel.send("**Command can't work here!\nExplosion Community only. :no_entry:\nlink: [ https://discord.gg/5zr3apW ] **");
            message.react("📋");
              let choose = new Discord.RichEmbed()
                .setDescription("**\n❆ Public Commands. 👨‍👩‍👧‍👧\n❆ Staff Commands. 🔨\n**")
                .setFooter(message.author.username, message.author.displayAvatarURL)
                .setColor("RED");

                message.channel.sendEmbed(choose) .then(m => {
                  m.react("👨‍👩‍👧‍👧")
                  m.react("🔨")


                  let PublicFilter = (reaction, user) => reaction.emoji.name === "👨‍👩‍👧‍👧" && user.id === message.author.id;
                  let AdminsFilter = (reaction, user) => reaction.emoji.name === "🔨" && user.id === message.author.id;


                  let Public = m.createReactionCollector(PublicFilter, { time: 20000 });
                  let Admins = m.createReactionCollector(AdminsFilter, { time: 20000 });
                  

                  Public.on("collect", r => {
                      m.delete();
                    let public = new Discord.RichEmbed()
                      .setTitle("❆ Public Help Menu.")
                      .setDescription(`\n\n» ${prefix}server\n » ${prefix}id\n » ${prefix}avatar\n » ${prefix}new\n » ${prefix}ping\n » ${prefix}bot\n » ${prefix}report`)
                      .setTimestamp()
                      .setFooter(message.author.username, message.author.displayAvatarURL)
                      .setColor("RED");
                
                      message.channel.sendEmbed(public);
                
                  })
                
                  Admins.on("collect", r => {
                    m.delete();
                    let admins = new Discord.RichEmbed()
                    .setTitle("❆ Admins Help Menu.")
                    .setTimestamp()
                    .setDescription(`\n\n» ${prefix}clear\n » ${prefix}bc\n » ${prefix}mute\n » ${prefix}unmute\n » ${prefix}kick\n » ${prefix}ban\n » ${prefix}close`)
                    .setFooter(message.author.username, message.author.displayAvatarURL)
                    .setColor("RED");
                
                    message.channel.sendEmbed(admins);
                
                
                
                
                  })
                
                });
                }
                
                });


// bot
client.on("message", message => {
  if(message.content.startsWith(prefix + "bot")) {
    if(!message.channel.guild) return;  
    message.react("🤖");
      let info = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle(`**${client.user.username}**`)
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setDescription(`❆ My ID:\n[ ${client.user.id} ]\n❆ My Ping:\n[ ${client.ping} ms. ]\n❆ Creator:\n[ ${client.users.find(a => a.id === "410778583682777098").tag} ]\n❆ My Game:\n[ ${client.user.presence.game.name || "Not Playing.."} ]`);

        message.channel.sendEmbed(info);
  }
});
// server
client.on('message', msg => {
  if(msg.content.startsWith (prefix + 'server')) {
    if(!msg.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **Name : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** Region:**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** Roles :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** Members :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':pencil:** TextChannels :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** VoiceChannels :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** Owner :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ID :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** Created At : **',msg.guild.createdAt.toLocaleString())
    .addField(':sleeping:**AFKChannel :**',`**${msg.guild.afkChannel || 'None'}**`, true)
    msg.channel.send({embed:embed});
  }
});
//avatar
client.on("message", message => {
  if(message.content.startsWith(prefix + "avatar")) {
    if(!message.channel.guild) return;
      let human = message.mentions.users.first();
      if(human) {
        var him = human;
      } else {
        var him = message.author;
      }
      message.react("🖼");
      let avatar = new Discord.RichEmbed()
        .setImage(him.avatarURL)
        .setTitle(`❆ Requested by: ${message.author.tag}`)
        .setColor("BLACK")
        .setFooter(message.author.username, message.author.displayAvatarURL);

        message.channel.sendEmbed(avatar)
  }
});
//clear
client.on('message', message => {
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + 'clear')) {
      if(message.member.hasPermission("MANAGE_MESSAGES")) {
          let embed = new Discord.RichEmbed()
              .setTitle("**Clear operation.**")
              .setDescription("**Cancel. ❎\nClear Chat.✅**")
              .setColor("RANDOM");
              message.channel.sendEmbed(embed)
              .then(msg => {
                  msg.react('✅')
                  msg.react('❎')


                          let canceloperation = (reacting, man) => reacting.emoji.name === '❎' && man.id === message.author.id;
                          let doOperation = (reacting, man) => reacting.emoji.name === '✅' && man.id === message.author.id;


                          let cleard = msg.createReactionCollector(doOperation, { time: 10000 });
                          let canceled = msg.createReactionCollector(canceloperation, { time: 10000 });

              canceled.on('collect', v => {
                  msg.delete()
                  .then(message.channel.send('**Operation has been canceled successfully. ✅**'))
                      .then(m => {
                          m.delete(5000);
                      });
              });

              cleard.on('collect', v => {
                  message.channel.fetchMessages()
                      .then(sce => {
                          message.channel.bulkDelete(sce)
                              .then(message.channel.send('**Chat has been successfully cleard. :white_check_mark:**'))
                                  .then(art => {
                                      art.delete(5000);
                                  });
                      });
              });
                 
              })
      } else {
          return;
      }
  }
});
//id
client.on('message', message => {
  if(message.content.startsWith(prefix + 'id')) {
  var year = message.author.createdAt.getFullYear()
  var month = message.author.createdAt.getMonth()
  var day = message.author.createdAt.getDate()
  let args = message.content.split(' ').slice(1).join(' ');
  if (args == '') {
  var z = message.author;
  }else {
  var z = message.mentions.users.first();
  }
  
  let d = z.createdAt;
  let n = d.toLocaleString();
  let x;
  let y;
  
  if (z.presence.game !== null) {
  y = `${z.presence.game.name}`;
  } else {
  y = "Not Playing... |💤.";
  }
  if (z.bot) {
  var w = 'Bot';
  }else {
  var w = 'Person';
  }
 let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**🔱| Name:**',`**<@` + `${z.id}` + `>**`, true)
  .addField('**📠 | ID:**:', "**"+ `${z.id}` +"**",true)
  .addField('**🎮 | Game:**','**'+y+'**' , true)
  .addField('**🤖| Type:**',"**"+ w + "**",true)
  .addField('**📛| Tag:**',"**#" +  `${z.discriminator}**`,true)
  .addField('**📆| Joined discord at:** ' ,year + "-"+ month +"-"+ day)
  .addField("**⌚| Joined server at:**", message.member.joinedAt.toLocaleString())
  .setThumbnail(`${z.avatarURL}`)
  .setFooter(message.author.username, message.author.avatarURL)
  
  message.channel.send({embed});
  
  }
  
});
// bc
client.on('message', message => {
let command = message.content.split(" ")[0];
if(command == prefix + 'bc') { 
  let args = message.content.split(' ').slice(1).join(' ');
  if(message.author.bot) return;
  if(!args) return message.channel.send(`**» Usage: \`${prefix}bc <message>\` **`);
  
  let bcSure = new Discord.RichEmbed()
  .setTitle(`:mailbox_with_mail: **| Are you sure you want to send this message to ${message.guild.memberCount} members?**`)
  .setColor('RANDOM')
  .setDescription(`**\n» Content:**\n\n${args}`)
  .setTimestamp()
  .setFooter(message.author.tag, message.author.avatarURL)
  
  message.channel.send(bcSure).then(msg => {
    msg.react('✅').then(() => msg.react('❎'));
    message.delete();
    
    
    let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
    let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
    
    let sendBC = msg.createReactionCollector(yesEmoji);
    let dontSendBC = msg.createReactionCollector(noEmoji);
    
    sendBC.on('collect', r => {
      message.guild.members.forEach(member => {
        member.send(args.replace(`[user]`, member)).catch();
        if(message.attachments.first()){
          member.sendFile(message.attachments.first().url).catch();
        }
      })
      message.channel.send(`**:timer: | Sending your broadcast message to [ __${message.guild.memberCount}__ ] members.**`).then(msg => msg.delete(5000));
      msg.delete();
    })
    dontSendBC.on('collect', r => {
      msg.delete();
      message.reply('**:white_check_mark: | Your broadcast has been cancelled successfuly.**').then(msg => msg.delete(5000));
    });
  })
}
});
// ban
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.channel.send('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**You're not allowed to use this command. :x:**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("**I'm missing the following permissions: `BAN_MEMBERS`. :x:**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.channel.send("**Select someone to ban. :x:**");
  if(!reason) return message.channel.send ("**Provide a ban reason. :x:**");
  if (!message.guild.member(user)
  .bannable) return message.channel.send("**This role has a higher role than mine. :x:**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
// kick
client.on('message', message => {
    if (message.author.kick) return;
    if (!message.content.startsWith(prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
   
    let args = message.content.split(" ").slice(1);
   
    if (command == "kick") {
                 if(!message.channel.guild) return;
           
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("**You're not allowed to use this command. :x:**").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("**I'm missing the following permissions: `KICK_Members`. :x:**");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
   
    if (message.mentions.users.size < 1) return message.channel.send("**Select someone to kick. :x:**");
    if(!reason) return message.channel.send ("**Provide a kick reason. :x:**");
    if (!message.guild.member(user)
    .bannable) return message.channel.send("**This member has a higher role than mine. :x:**");
   
    message.guild.member(user).kick(7, user);
   
    const banembed = new Discord.RichEmbed()
    .setAuthor('Kicked!', user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("User:",  `[ + ${user.tag} + ]`)
    .addField("By:", `[  + ${message.author.tag} +  ]`)
    .addField("Reason:", `[ + ${reason} +  ]`)
    message.guild.channels.find(a => a.name.includes("log")).send({embed : banembed})
  }
  });
// mute - unmute
client.on("message", message => {

  if(message.content.startsWith(prefix + "mute") || message.content.startsWith(prefix + "اسكت")) {
    let args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first() || args[1];
    let muted = message.guild.roles.find('name', 'Muted');
    let reason = message.content.split(" ").slice(2).join(" ");
    let logs = message.guild.channels.find(a => a.name.includes("log"));

    if(!message.channel.guild) return message.channel.send("**Servers Only! :x:**");
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("**You're not allowed to use this command. :x:**").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("**I'm missing the following permissions: `MUTE_MEMBERS`. :x:**");
        if(!user) return message.channel.send("**Mention someone to mute. :x:**");
          if(!reason) return message.channel.send("**Please provide a reason. :x:**");
      if(!muted) return message.channel.send("**Couldn't find the `Muted` role.**");
        if(user || reason || muted) {
            message.guild.channels.forEach(m => {
              m.overwritePermissions(muted.id, {
                SEND_MESSAGES: false,
                SPEAK: false
              })
            })

          message.guild.member(user.id).addRole(muted) .then(message.channel.send(`**${user} Muted. :zipper_mouth:**`));
          if(!logs) {
            return message.channel.send("**Please create logs channel with name `log` or `logs`. :x:**");
          }  
          let logembed = new Discord.RichEmbed()
          .setAuthor("Muted!", user.displayAvatarURL)
            .addField("User", user, true)
            .addField("By", message.author, true)
            .addField("In", message.channel, true)
            .setColor("BLACK");
  
            logs.sendEmbed(logembed);
        }

    }
    if(message.content.startsWith(prefix + "unmute") || message.content.startsWith(prefix + "تكلم")) {
      let args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first() || args[1];
      let muted = message.guild.roles.find('name', 'Muted');
      let logs = message.guild.channels.find(a => a.name.includes("log"));
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("**You're not allowed to use this command. :x:**").then(msg => msg.delete(5000));
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("**I'm missing the following permissions: `MANAGE_ROLES`, `MANAGE_CHANNELS`. :x:**");
    if(message.guild.member(user.id).roles.has(muted)) {
      return message.channel.send("**This user is already unmuted. :x:**");

    }
    message.guild.member(user.id).removeRole(muted) .then(message.channel.send(`**${user} Unmuted. :grinning:**`));
          if(!logs) {
            return message.channel.send("**Please create logs channel with name `log` or `logs`. :x:**");
          }  
      let logembed = new Discord.RichEmbed()
          .setAuthor("Unmuted!", user.displayAvatarURL)
          .addField("User", user, true)
          .addField("By", message.author, true)
          .addField("In", message.channel, true)
          .setColor("BLACK");

          logs.sendEmbed(logembed);

  }    

});
// new - close
client.on('message', message => {
  if(message.content.startsWith(prefix + 'new')) {
      let args = message.content.split(' ').slice(1).join(' ');
      let support = message.guild.roles.find("name","Support Team");
      let ticketsStation = message.guild.channels.find("name", "TICKETS");
      if(!args) {
          return message.channel.send('**Please type a subject for the ticket. :x:**');
      };
              if(!support) {
                  return message.channel.send('**Please make sure that `Support Team` role exists and it\'s not duplicated.**');
              };
          if(!ticketsStation) {
              message.guild.createChannel("TICKETS", "category");
          };
              message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {
                  message.delete()
                      message.channel.send(`**Your ticket has been created. :white_check_mark: [ ${ticket} ]**`);
                  ticket.setParent(ticketsStation);
                  ticketsStation.setPosition(1);
                      ticket.overwritePermissions(message.guild.id, {
                          SEND_MESSAGES: false,
                          READ_MESSAGES: false
                      });
                          ticket.overwritePermissions(support.id, {
                              SEND_MESSAGES: true,
                              READ_MESSAGES: true
                          });
                              ticket.overwritePermissions(message.author.id, {
                                  SEND_MESSAGES: true,
                                  READ_MESSAGES: true
                              });
                  let embed = new Discord.RichEmbed()
                              .setTitle('**New Ticket.**')
                              .setColor("RANDOM")
                              .setThumbnail(`${message.author.avatarURL}`)
                              .addField('Subject', args)
                              .addField('Author', message.author)
                              .addField('Channel', `<#${message.channel.id}>`);

                              ticket.sendEmbed(embed);
              }) .catch();
  }
  if(message.content.startsWith(prefix + 'close')) {
          if(!message.member.hasPermission("ADMINISTRATOR")) return;
      if(!message.channel.name.startsWith("ticket")) {
          return;
      };  
              let embed = new Discord.RichEmbed()
                  .setAuthor("Do you really want to close this ticket? Repeat the command to make sure. You have 20 seconds.")
                  .setColor("RANDOM");
                  message.channel.sendEmbed(embed) .then(codes => {

                  
                      const filter = msg => msg.content.startsWith(prefix + 'close');
                      message.channel.awaitMessages(response => response.content === prefix + 'close', {
                          max: 1,
                          time: 20000,
                          errors: ['time']
                      })
                      .then((collect) => {
                          message.channel.delete();
                      }) .catch(() => {
                          codes.delete()
                              .then(message.channel.send('**Operation has been cancelled.**')) .then((c) => {
                                  c.delete(4000);
                              })
                                  
                          
                      })


                  })


          
  }
});
client.on('message', message => {

	if(message.author.id === "410778583682777098") {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');


    if (message.content.startsWith(prefix + 'setwatch')) {
    client.user.setActivity(argresult, {type: 'WATCHING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`Watching Now: **${argresult}**`)
  }


    if (message.content.startsWith(prefix + 'setlis')) {
    client.user.setActivity(argresult, {type: 'LISTENING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
  }


  if (message.content.startsWith(prefix + 'setname')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`Username Changed To **${argresult}**`)
    return message.reply(".");
  }

  if (message.content.startsWith(prefix + 'setavatar')) {
    client.user.setAvatar(argresult);
     message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
  }

  if (message.content.startsWith(prefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
       console.log('test' + argresult);
      message.channel.sendMessage(`Streaming: **${argresult}**`)
  }
  if (message.content.startsWith(prefix + 'setplay')) {
    client.user.setGame(argresult);
       console.log('test' + argresult);
      message.channel.sendMessage(`Playing: **${argresult}**`)
  }
	}

 });
//ping 
client.on('message', message => {
  if (message.author.id === client.user.id) return;
          if (message.content.startsWith(prefix + "ping")) {
      message.channel.sendMessage('**:ping_pong: Pong! In `' + `${client.ping}` + ' ms`**');
  }
});
// تقديم
client.on("message", message => {
    if(message.content.startsWith(prefix + "تقديم")) {
        if(!message.channel.guild) return;
    let 
    }
})




var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
    var guild = client.guilds.get("439182014231347210");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
 
 client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find(c => c.name === 'txt');
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
     var guild = client.guilds.get("439182014231347210");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    setTimeout(function() {
                        channel.send(`**${member},\n تمت دعـوته بواسطهه ${Invite.inviter} 🥂 .**`) ;
                    },1500);
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});


client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find(c => c.name === 'txt');
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        var guild = client.guilds.get("439182014231347210");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    setTimeout(function() {
 channel.send(`**${member},\n تمت دعـوته بواسطهه ${Invite.inviter} 🥂 .**`) ;
                    },1500);
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});


client.login(process.env.BOT_TOKEN);
