const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // Set bot status to: "Playing with JavaScript"
  client.user.setActivity(".help", {type: "WATCHING"});
  // Alternatively, you can set the activity to any of the following:
  // PLAYING, STREAMING, LISTENING, WATCHING
  // For example:
  // client.user.setActivity("TV", {type: "WATCHING"})

});

client.on('message', msg => {

  let message = msg.toString();

  if (message.substring(0, 1) == ".") {
    
    if (msg.author == client.user) {
      return
    }

    let arg = message.substring(1).split(' ');
    let cmd = arg[0];

    let idServ = msg.guild.id;
    let idChannel = msg.channel.id;
    let nameFile = idServ+'_'+idChannel;

    let path = './storage/gameConfig/'+nameFile;

    let tabGame = ['pkmn'];


    arg = arg.splice(1);

    switch (cmd) {

      case 'help':

        msg.channel.send("```yop il y a R pour le moment```");

        break;

      case 'play':
        let gameName, gameNumber;

        if (tabGame.indexOf(arg[0])) {
          msg.channel.send("```Le jeu choisi est incorrect```");
          return;
        }
        else {
          gameName = arg[0];
        }

        let reg = /^[0-9]+$/;
        let verif = reg.test(arg[1])

        if (verif === false || arg[1] === "" || arg[1] === "0") {
          msg.channel.send("```Le nombre de partie est incorrect```");
          return;
        }
        else {
          gameNumber = arg[1];
        }

        let text = "{\"Jeu\":\""+gameName+"\",\n\"Nombre\":"+gameNumber+",\n\"Etat\":0";

        if (fs.existsSync(path)) {
          msg.channel.send("```Une partie est déjà en cours dans ce channel arreter la ou changer de channel```");
        }
        else {
          fs.writeFile(path, text, function(err) {
            if(err) {
              return console.log(err);
            } else {
              msg.channel.send("```La partie a ete cree```");
            }
          })
        }

        break;

      case 'join':

        if (fs.existsSync(path)) {

          let valid = fs.readFileSync(path,'utf8')+"}";
          obj = JSON.parse(valid);

          if (obj.Etat == 1) {
            msg.channel.send("```La partie est deja en cours```");
            return;
          }

          let text = fs.readFileSync(path,'utf8');

          let idUser = msg.author.id;

          if (text.includes(idUser) == false) {
            text += ",\n\""+idUser+"\":{\"points\":0}";
            fs.writeFile(path, text, function(err) {
              if(err) {
                return console.log(err);
              } else {
                msg.channel.send("```vous avez rejoins la partie```");
              }
            })
          } else{
            msg.channel.send("```vous etes deja enregistré```");
          }

        } else {

          msg.channel.send("```La partie n'est pas crée```");
          return;

        }

        break;

      case 'start':
        
        if (fs.existsSync(path)) {

          let text = fs.readFileSync(path,'utf8');

          console.log(text);

          text += "\}";

          fs.writeFile(path, text, function(err) {
            if(err) {
              return console.log(err);
            }
          })

          obj = JSON.parse(text);          

          obj.Etat = 1;

          let game = obj.Jeu;

          obj = JSON.stringify(obj);

          fs.truncate(path, 0, function(err) {
            if(err) {
              return console.log(err);
            }
          })
          
          fs.writeFile(path, obj, function(err) {
            if(err) {
              return console.log(err);
            } else {
              msg.channel.send("```La partie commence```");
              theGame(game);
            }
          })

        } else {
  
          msg.channel.send("```La partie n'est pas crée```");
          return;
  
        }
        break;

      case 'stop':
          if (fs.existsSync(path)) {
            fs.unlinkSync(path);
            msg.channel.send("```La partie est finie```");
          }
        break;
    
      default:
        break;
    }

  }

});

function theGame(game){

  let filePath

  switch (game) {
    case 'pkmn':
      
      break;
  
    default:
      break;
  }
}




client.login('');