const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // Set bot status to: "Playing with JavaScript"
  client.user.setActivity("Ta soeur sous la douche", {type: "WATCHING"});
  // Alternatively, you can set the activity to any of the following:
  // PLAYING, STREAMING, LISTENING, WATCHING
  // For example:
  // client.user.setActivity("TV", {type: "WATCHING"})

});

client.on('message', msg => {

   msg1 = msg.toString();

   if (msg.author == client.user) {
    return
  }


  // if (msg1.includes("buu")) {
  //   msg.channel.send("Buu Buu est la");
  //   msg.channel.send("https://tenor.com/Nm2Y.gif ");
  //   msg.channel.send("Fuuuuuuuuuuuuu");
  // }

  // if (msg1.includes("sionnnnnnnnnn")) {
  //   msg.channel.send("https://tenor.com/uQxM.gif");
  // }

  msg2 = msg1[0] + msg1[1];
  msg3 = msg1[0] + msg1[1] + msg1[2];
  msg4 = msg1[0] + msg1[1] + msg1[2] + msg1[3] + msg1[4];
  msg5 = msg1[0] + msg1[1] + msg1[2] + msg1[3] + msg1[4] + msg1[5];
  msg6 = msg1[0] + msg1[1] + msg1[2] + msg1[3] + msg1[4] + msg1[5] + msg1[6] + msg1[7] + msg1[8];

  number = Math.floor(Math.random() * (4)) + 1;


  if (msg2 === ".b") {

    if (msg1.includes("toto") || msg1.includes("thomas")) {
      msg.channel.send("<@228552653863387136>");

      switch (number) {
        case 1:
        msg.channel.send("https://tenor.com/view/gfdarwin-rafal-zgoda-approve-smile-gif-9892190");  
          break;
        case 2:
        msg.channel.send("https://tenor.com/view/god-religious-bright-light-flash-gif-5701179");
          break;
        case 3:
        msg.channel.send("https://tenor.com/view/pooh-gif-6130710");  
          break;
        case 4:
        msg.channel.send("https://tenor.com/view/woah-hair-fix-gif-5429411");  
          break;
      }

    }
  
    if (msg1.includes("robin") || msg1.includes("rob") || msg1.includes("roboun")) {
      msg.channel.send("<@245679104022675462>");

      switch (number) {
        case 1:
        msg.channel.send("https://tenor.com/view/dead-suicide-carebear-familyguy-gif-4503215");  
          break;
        case 2:
        msg.channel.send("https://tenor.com/view/creepy-hamster-gif-5395864");  
          break;
        case 3:
        msg.channel.send("https://tenor.com/t0nX.gif");  
          break;
        case 4:
        msg.channel.send("https://giphy.com/gifs/pandawhale-sitepandawhalecom-CLkW1CgQA5xwA");  
          break;
      }
    }
  
    if (msg1.includes("raph") || msg1.includes("raphael") || msg1.includes("keke")) {

      msg.channel.send("<@311888770804744203>");

      switch (number) {
        case 1:
        msg.channel.send("https://tenor.com/view/firstcar-gif-8484210");  
          break;
        case 2:
        msg.channel.send("https://tenor.com/view/girl-car-drive-thug-life-gif-9933565");  
          break;
        case 3:
        msg.channel.send("https://tenor.com/view/yay-new-car-gif-10709707");  
          break;
        case 4:
        msg.channel.send("https://tenor.com/view/seb-la-frite-beauf-seb-le-beauf-shrug-gif-12841239");  
          break;
      }

    }
  
    if (msg1.includes("mat") || msg1.includes("matmat") || msg1.includes("mathieu")) {
      msg.channel.send("<@96644167945453568>");

      switch (number) {
        case 1:
        msg.channel.send("https://tenor.com/view/hatsune-miku-blush-cute-heart-gif-12745078");  
          break;
        case 2:
        msg.channel.send("https://tenor.com/view/alpaca-baby-puppet-gif-11514976");
        break;
        case 3:
        msg.channel.send("https://tenor.com/view/jess300-princesspeach-princess-peach-gif-5314404");  
          break;
        case 4:
        msg.channel.send("https://tenor.com/view/puppy-gif-5441491");  
          break;
      }

    }
  
    if (msg1.includes("remy") || msg1.includes("rem")) {
      msg.channel.send("<@223872867614457856>");

      switch (number) {
        case 1:
        msg.channel.send("https://tenor.com/view/coffee-need-coffee-gif-9553134");  
          break;
        case 2:
        msg.channel.send("https://tenor.com/view/coucou-toi-beau-gosse-gif-12639572");  
          break;
        case 3:
        msg.channel.send("https://tenor.com/view/rammstein-flamethrower-stage-perform-crowd-gif-5101375");  
          break;
        case 4:
        msg.channel.send("https://tenor.com/view/lazy-gif-4252059");  
          break;
      }
    }

    if (msg1.includes("jojo") || msg1.includes("jonathan")) {
      msg.channel.send("<@157246429889298433>");

      switch (number) {
        case 1:
        msg.channel.send("https://tenor.com/view/sleepy-snorlax-pokemon-gif-12657068");  
          break;
        case 2:
        msg.channel.send("https://tenor.com/view/anime-manga-japanese-anime-japanese-manga-ionly-feel-alive-when-im-klling-someone-gif-5296012");  
          break;
        case 3:
        msg.channel.send("https://tenor.com/view/bref-super-casse-couilles-gif-11265373");  
          break;
        case 4:
        msg.channel.send("https://tenor.com/view/bear-byebear-gif-8725056");  
          break;
      }
    }
  
    if (msg1.includes("bot")) {
      msg.channel.send("<@525620720303210506>");
      msg.channel.send("https://giphy.com/gifs/cheezburger-video-games-link-rage-HfAdbJfq085G0");
    }
  }

  if (msg3 === ".we") {
      msg.channel.send("@everyone");
      switch (number) {
        case 1:
        msg.channel.send("https://tenor.com/view/monkey-dance-gif-9965336"); 
          break;

        case 2:
        msg.channel.send("https://tenor.com/view/homer-simpsons-weekend-feels-mood-gif-11583609"); 
          break;

        case 3:
        msg.channel.send("https://tenor.com/view/end-week-ending-week-friday-fuck-everyone-fuck-everybody-gif-10405938"); 
          break;

        case 4:
          msg.channel.send("https://tenor.com/view/yeahsleepwell-any-plans-for-the-weekend-gif-9717457"); 
          break;
      }

  }

  if (msg4 === ".time") {
    var test = new Date();
    heure = test.getHours() + " : " + test.getMinutes();
    msg.channel.send("@everyone");
    msg.channel.send(heure);
  }

  if (msg4 === ".date") {
    var test = new Date();
    jour = test.getDay();
    date = test.getDate();
    mois = test.getMonth();

    switch (jour) {
      case 0:
        jour ="dimanche";
        break;
      
      case 1:
        jour ="lundi";
        break;

      case 2:
        jour ="mardi";
        break;

      case 3:
        jour ="mercredi";
        break;

      case 4:
        jour ="jeudi"; 
        break;

      case 5:
        jour ="vendredi";  
        break;

      case 6:
        jour ="samedi"; 
        break;
    }

    switch (mois) {
      case 0:
        mois = "janvier";
        break;
      
      case 1:
      mois = "fevrier";
        break;

      case 2:
      mois = "mars"; 
        break;

      case 3:
      mois = "avril";
        break;

      case 4:
      mois = "mai";
        break;

      case 5:
      mois = "juin";
        break;

      case 6:
      mois = "juillet";
        break;

      case 7:
      mois = "aout";
        break;

      case 8:
      mois = "septembre";
        break;

      case 9:
      mois = "octobre";
        break;

      case 10:
      mois = "novembre";
        break;

      case 11:
      mois = "decembre";
        break;
    }

    FullDate = jour + " " + date + " " + mois;

    msg.channel.send("@everyone");
    msg.channel.send(FullDate);
  }

  if (msg5 === ".demon") {
    msg.channel.send("<@96644167945453568> Sort de ma vie demon");
    msg.channel.send("https://tenor.com/view/fuera-satanas-no-me-haras-gif-5368236"); 
  }

  if (msg6 === ".screamer") {
    msg.channel.send("http://static8.viadeo-static.com/FOXNnCcLlWPw7gBxkQHcqm9LnQM=/300x300/member/00252d9wt8uf1su%3Fts%3D1472629880000");
  }

  if (msg5 === ".quizz") {
    msg.delete();
    msg1 = msg1.substring(7);
    if (msg1.includes("pkmn")) {
      aaaa = require('./pkmn')

      variable = aaaa.pkmn();
      console.table(variable);

      console.log("---------------------");

      msg.channel.send("C'est qui qui comme pokemon ?");
      msg.channel.send({files: [variable.imagewin]});
      msg.channel.send({files: [variable.imageuni]});

      nomBon = variable.nom;

      var nomFaux = [];

      for (var i = 0; i < 3; i++) {
        bbbb = require('./pkmn');
        variables = bbbb.pkmn();
        console.table(variables);
        if (variables.nom !== nomFaux[0] && 
          variables.nom !== nomFaux[1] && 
          variables.nom !== nomFaux[2] && 
          variables.nom !== nomBon) {

        nomFaux[i] = variables.nom;

         }
         else
         {
          i--;
         }
      }

      setTimeout(reppkmn,100);

      function reppkmn() {
       
        x = 0;
        cas1 = 1;
        cas2 = 1;
        cas3 = 1;
        cas4 = 1;




        while (x < 4) {
          numrep = Math.floor(Math.random() * Math.floor(4));

          console.log(numrep);

          switch (numrep) {
            case 0 :
              if (cas1 == 1) {
                msg.channel.send(nomBon);
                cas1 = 0;
                x++;
              }
            break;
            case 1 :
              if (cas2 == 1) {
                msg.channel.send(nomFaux[0]);
                cas2 = 0;
                x++;
              }
            break;
            case 2 :
              if (cas3 == 1) {
                msg.channel.send(nomFaux[1]);
                cas3 = 0;
                x++;
              }
            break;
            case 3 :
              if (cas4 == 1) {
                msg.channel.send(nomFaux[2]);
                cas4 = 0;
                x++;
              }
            break;

            default :
            msg.channel.send("mince");
            msg.channel.send(numrep);
            break

          }

        }
      }

  
    }
    
  }
});
