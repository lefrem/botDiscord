module.exports = {
    pkmn: function() { 

        var tab = [];

            //tab[] = {     "imagewin" : "",    "imageuni" : "",     "nom" : ""      };

       tab[0] =   {     "imagewin" : ".\\img\\bulbizarre.png",   "imageuni" : ".//img//bulbizarre.png",    "nom" : "bulbizarre"     };
       tab[1] =   {     "imagewin" : ".\\img\\herbizarre.png",   "imageuni" : ".//img//herbizarre.png",    "nom" : "herbizarre"     };
       tab[2] =   {     "imagewin" : ".\\img\\florizarre.png",   "imageuni" : ".//img//florizarre.png",    "nom" : "florizarre"     };
       tab[3] =   {     "imagewin" : ".\\img\\salameche.png",    "imageuni" : ".//img//salameche.png",     "nom" : "salameche"      };
       tab[4] =   {     "imagewin" : ".\\img\\reptincel.png",    "imageuni" : ".//img//reptincel.png",     "nom" : "reptincel"      };
       tab[5] =   {     "imagewin" : ".\\img\\dracaufeu.png",    "imageuni" : ".//img//dracaufeu.png",     "nom" : "dracaufeu"      };
       tab[6] =   {     "imagewin" : ".\\img\\carapuce.png",     "imageuni" : ".//img//carapuce.png",      "nom" : "carapuce"       };
       tab[7] =   {     "imagewin" : ".\\img\\carabaffe.png",    "imageuni" : ".//img//carabaffe.png",     "nom" : "carabaffe"      };
       tab[8] =   {     "imagewin" : ".\\img\\tortank.png",      "imageuni" : ".//img//tortank.png",       "nom" : "tortank"        };
       tab[9] =   {     "imagewin" : ".\\img\\chenipan.png",     "imageuni" : ".//img//chenipan.png",      "nom" : "chenipan"       };
       tab[10] =  {     "imagewin" : ".\\img\\chrysacier.png",   "imageuni" : ".//img//chrysacier.png",    "nom" : "chrysacier"     };
       tab[11] =  {     "imagewin" : ".\\img\\papilusion.png",   "imageuni" : ".//img//papilusion.png",    "nom" : "papilusion"     };
       tab[12] =  {     "imagewin" : ".\\img\\aspicot.png",      "imageuni" : ".//img//aspicot.png",       "nom" : "aspicot"        };
       tab[13] =  {     "imagewin" : ".\\img\\coconfort.png",    "imageuni" : ".//img//coconfort.png",     "nom" : "coconfort"      };
       tab[14] =  {     "imagewin" : ".\\img\\dardargnan.png",   "imageuni" : ".//img//dardargnan.png",    "nom" : "dardargnan"     };
       tab[15] =  {     "imagewin" : ".\\img\\roucool.png",      "imageuni" : ".//img//roucool.png",       "nom" : "roucool"        };
       tab[16] =  {     "imagewin" : ".\\img\\roucoups.png",     "imageuni" : ".//img//roucoups.png",      "nom" : "roucoups"       };
       tab[17] =  {     "imagewin" : ".\\img\\roucarnage.png",   "imageuni" : ".//img//roucarnage.png",    "nom" : "roucarnage"     };
       tab[18] =  {     "imagewin" : ".\\img\\rattata.png",      "imageuni" : ".//img//rattata.png",       "nom" : "rattata"        };
       tab[19] =  {     "imagewin" : ".\\img\\rattatac.png",     "imageuni" : ".//img//rattatac.png",      "nom" : "rattatac"       };
       tab[20] =  {     "imagewin" : ".\\img\\piafabec.png",     "imageuni" : ".//img//piafabec.png",      "nom" : "piafabec"       };
       tab[21] =  {     "imagewin" : ".\\img\\rapasdepic.png",   "imageuni" : ".//img//rapasdepic.png",    "nom" : "rapasdepic"     };
       tab[22] =  {     "imagewin" : ".\\img\\abo.png",          "imageuni" : ".//img//abo.png",           "nom" : "abo"            };
       tab[23] =  {     "imagewin" : ".\\img\\arbok.png",        "imageuni" : ".//img//arbok.png",         "nom" : "arbok"          };
       tab[24] =  {     "imagewin" : ".\\img\\pikachu.png",      "imageuni" : ".//img//pikachu.png",       "nom" : "pikachu"        };
       tab[25] =  {     "imagewin" : ".\\img\\raichu.png",       "imageuni" : ".//img//raichu.png",        "nom" : "raichu"         };
       tab[26] =  {     "imagewin" : ".\\img\\sabelette.png",    "imageuni" : ".//img//sabelette.png",     "nom" : "sabelette"      };
       tab[27] =  {     "imagewin" : ".\\img\\sablaireau.png",   "imageuni" : ".//img//sablaireau.png",    "nom" : "sablaireau"     };
       tab[28] =  {     "imagewin" : ".\\img\\nidoran♀.png",     "imageuni" : ".//img//nidoran♀.png",      "nom" : "nidoran♀"       };
       tab[29] =  {     "imagewin" : ".\\img\\nidorina.png",     "imageuni" : ".//img//nidorina.png",      "nom" : "nidorina"       };
       tab[30] =  {     "imagewin" : ".\\img\\nidoqueen.png",    "imageuni" : ".//img//nidoqueen.png",     "nom" : "nidoqueen"      };
       tab[31] =  {     "imagewin" : ".\\img\\nidoran♂.png",     "imageuni" : ".//img//nidoran♂.png",      "nom" : "nidoran♂"       };
       tab[32] =  {     "imagewin" : ".\\img\\nidorino.png",     "imageuni" : ".//img//nidorino.png",      "nom" : "nidorino"       };
       tab[33] =  {     "imagewin" : ".\\img\\nidoking.png",     "imageuni" : ".//img//nidoking.png",      "nom" : "nidoking"       };
       tab[34] =  {     "imagewin" : ".\\img\\melofee.png",      "imageuni" : ".//img//melofee.png",       "nom" : "melofee"        };
       tab[35] =  {     "imagewin" : ".\\img\\melodelfe.png",    "imageuni" : ".//img//melodelfe.png",     "nom" : "melodelfe"      };
       

       number = Math.floor(Math.random() * Math.floor(36));

      return tab[number];
    }
};