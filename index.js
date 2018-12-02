const Discord = require('discord.js');

const bot = new Discord.Client();

var prefix = ">";

bot.login(process.env.token);

bot.on("ready", () => {

  console.log("Je suis prêt")

  

bot.user.setActivity("[>help] TinexSecurity®『🚫』 1 servers", {type:"STREAMING"}); 

});

bot.on("guildMemberAdd", member => {

           const bvn = member.guild.channels.find(m => m.name === "bienvenue-bye") 

    if (!bvn) return; 

        let embed = new Discord.RichEmbed()

       .setAuthor("👇🏻 Nouveau Membre 👇🏻")

       .addField(`Bienvenue à toi ${member.username} !`, `:arrow_right: Nous sommes maintenant **${member.guild.memberCount} membres**`)

       .setFooter(`ID : ${member.id}`)

       .setColor('#11FA00')

     bvn.send(embed)

})

bot.on("guildMemberRemove", member => {

           const bye = member.guild.channels.find(m => m.name === "bienvenue-bye") 

    if (!bye) return; 

        let embed = new Discord.RichEmbed()

       .setAuthor("👋 Départ 👋 ")

       .addField(`Aurevoir ${member.username} !`, `:arrow_right: Nous sommes désormais **${member.guild.memberCount} membres**`)

       .setFooter(`ID : ${member.id}`)

       .setColor('#ED0008')

     bye.send(embed)

})

bot.on('message', message => { 

    if(message.content === "test"){

        message.delete(message.author);

        message.reply("test effectué . Le bot marche parfaitement :white_check_mark:");

        console.log('Le bot se test');

    }

    

	if(message.content.startsWith(prefix + "servlist")){

  message.delete(message.author)

  const embed = new Discord.RichEmbed()

   .setColor("#0800F6")

   .setAuthor(message.author.tag, message.author.avatarURL)

   .addField("**Noms des serveurs où est le bot :**", bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))

   .setFooter("TinexSecurity®『🚫』")

   .setTimestamp()

  message.channel.send(embed)

  }

if(message.content === prefix + "help") {
message.delete(message.author);


        var help_embed = new Discord.RichEmbed()

        .setColor("#0018F0")

        .setTitle("Voici la page d'aide !")

        .addField(":oncoming_police_car: Modération", "``>help.mod``")

        .addField(":rotating_light: Administration", "``>help.admin``")

        .addField(":tada: FUN", "``>help.fun``")

        .addField("Support","Bientôt")

        .addField("Invitation","Bientôt")

        .setFooter("TinexSecurity®『🚫』")

        .setTimestamp()

        message.channel.send("La page d'aide vous à bien été envoyée en Message Privé !:incoming_envelope:")

        message.author.send(help_embed)

        console.log("Un utilisateur a effectué la commande d'aide !")

   

     }

 

 if(message.content === prefix + "help.mod") {
message.delete(message.author);
        var mod_embed = new Discord.RichEmbed()

        .setColor("#39F400")

        .setTitle("Voici la page d'aide de modération !")

        .addField(":mute: Muet", "``>mute`` ``>unmute``")

        .addField(":warning: Warn",">warn")

        .addField("Question", "**Pour toute question merci de mp mon développeur Carambar#1295**")

        .addField("Support","Bientot")

        .addField("Invitation","Bientôt")

        .setFooter("TinexSecurity®『🚫』")

        .setTimestamp()

        message.channel.send("La page d'aide de modération vous à bien été envoyée en Message Privé !:incoming_envelope:")

        message.author.send(mod_embed)

        console.log("Un utilisateur a effectué la commande d'aide moďération !")

   

     }

     

 if(message.content === prefix + "help.admin") {
message.delete(message.author);
        var adm_embed = new Discord.RichEmbed()

        .setColor("#EC0066")

        .setTitle("Voici la page d'aide d'administration !")

        .addField(":no_entry_sign: Ban", "``/ban``")

        .addField(":door: Kick", "``/kick``")

        .addField("Question", "**Pour toute question merci de mp mon développeur Carambar#1295**")

        .addField("Support","Bientôt")

        .addField("Invitation","Bientôt")

        .setFooter("TinexSecurity®『🚫』")

        .setTimestamp()

        message.channel.send("La page d'aide d'administration vous à bien été envoyée en Message Privé !:incoming_envelope:")

        message.author.send(adm_embed)

        console.log("Un utilisateur a effectué la commande d'aide administration !")

   

     }

  

      if(message.content === prefix + "help.fun") {
message.delete(message.author);
        var fun_embed = new Discord.RichEmbed()

        .setColor("#00E9CA")

        .setTitle("Voici la page d'aide fun !")

        .addField(":confetti_ball: Fun", "``/vcs`` ``8ball`` ``/say``")

        .addField("Question", "**Pour toute question merci de mp mon développeur Carambar#1295 **")

        .addField("Support","Bientôt")

        .addField("Invitation","Bientôt ")
=bot")

        .setFooter("TinexSecurity®『🚫』")

        .setTimestamp()

        message.channel.send("La page d'aide fun vous à bien été envoyée en Message Privé !:incoming_envelope:")

        message.author.send(fun_embed)

        console.log("Un utilisateur a effectué la commande d'aide fun !")

   

     }

  

              

if(message.content.startsWith(prefix + "kick")) {

        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permissions !");

        if(message.mentions.users.size === 0) {

            return message.channel.send("Vous devez mentionner un utilistaur")

        }

        var kick = message.guild.member(message.mentions.users.first());

        if(!kick) {

            return message.channel.send("Je ne sais pas si l'utilisateur existe :/")

        }

        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {

            return message.channel.send("Je n'ai pas la permission pour kick");

        }

        

        kick.kick().then(member => { 

            message.channel.send(`${member.user.username} est kick par ${message.author.username}`)

        });

    }

    if(message.content.startsWith(prefix + "ban")) {

        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la premissions");

        if(message.mentions.users.size === 0) {

            return message.channel.send("Vous devez mentionner un utilisateur");

        }

        var ban = message.guild.member(message.mentions.users.first());

        if(!ban) { 

            return message.channel.send("Je ne sais pas si l'utilisateur existe")

        }

        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {

            return message.channel.send("Je n'ai pas la permission pour ban");

        }

        ban.ban().then(member => {

            message.channel.send(`${member.username} est ban par ${message.author.username} !`)

        }

        )

    }

    if(message.content.startsWith(prefix + "clear")) {

        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permissions !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messags à surpprimer !")

        message.channel.bulkDelete(args[0]).then(() => {

            message.channel.send(`${args[0]} messages ont été surpprimés !:recycle:`);

        })

    }

        

if (message.content.startsWith(prefix + "8ball")) {

	message.delete(message.author);

	let args = message.content.split(" ").slice(1);

	let tte = args.join(" ")

	if (!tte){

		return message.reply("Merci de me poser une question")};

		var replys = [

		"Oui",

		"Non",

		"Je sais pas",

		"Peut être"

		];

	let reponse = (replys[Math.floor(Math.random() * replys.length)])

	var bembed = new Discord.RichEmbed()

	.setDescription("🎱 8ball")

	.addField("Question", tte)

	.addField("Réponse", reponse)

	.setColor("RANDOM")

message.channel.sendEmbed(bembed)

}

if(message.content.startsWith(prefix + "say")){

		message.delete(message.author);

	var text = message.content.split(' ').slice(1).join(' ')

	if(!text) return message.reply('Hey salut')

	message.channel.send(text)

}

      if (message.content.startsWith(prefix + "vcs")) {

        message.delete(message.author); 

        let argson = message.content.split(" ").splice(1);

        let vcsmsg = argson.join(" ")

        if(!message.guild.channels.find("name", "security-vcs")) return message.reply("Erreur, le channel vcs-security est introuvable");

        if(message.channel.name !== "security-vcs") return message.reply("Commande à effectuer dans vcs-security");

        if(!vcsmsg) return message.reply("Merci d'envoyer un message dans la globalité des discords");

    

        var replys = [];

        let reponse = (replys[Math.floor(Math.random() * replys.length)])

        var embed = new Discord.RichEmbed()

        .setColor("RANDOM")

        .setAuthor("TinexProtect BOT - VCS", bot.user.avatarURL)

        .addField("Serveur", message.guild.name, true)

        .addField("Utilisateur", message.author.tag, true)

        .addField("Message", vcsmsg)

        .setFooter("VCS")

        .setTimestamp()

        bot.channels.findAll('name', 'security-vcs').map(channel => channel.send(embed)) 

          }

  

      if (message.content.startsWith(prefix + "alertes")) {

        message.delete(message.author); 

        let argson = message.content.split(" ").splice(1);

        let vcsmsg = argson.join(" ")

        if(!message.guild.channels.find("name", "🚨alertes")) return message.reply("Erreur, le channel 🚨alertes est introuvable");

        if(message.channel.name !== "🚨alertes") return message.reply("Commande à effectuer dans 🚨alertes");

        if(!vcsmsg) return message.reply("Merci d'envoyer un message dans la globalité des discords");

        var replys = [];

        let reponse = (replys[Math.floor(Math.random() * replys.length)])

        var embed = new Discord.RichEmbed()

        .setColor("RANDOM")

        .setAuthor("TinexProtect BOT - INFO", bot.user.avatarURL)

        .addField("Information",vcsmsg)

        .addField("Autres","**``Merci d'avoir lu'.``**")

        .setFooter("TinexProtect®『🚫』")

        .setTimestamp()

        bot.channels.findAll('name', '🚨alertes').map(channel => channel.send(embed))

      }

if(message.content.startsWith(prefix + "stop")) {

    if(message.author.id == "482090176361791491") {

        message.channel.send(":gear: *Arrêt en cours...*").then(() => {

            console.log("Je suis off !")

            client.destroy();

            process.exit()

         })

        } else {

            message.channel.send(":x: Vous n'êtes pas l'owner du bot!")

        }

     }

  });
