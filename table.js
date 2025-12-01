      
      console.log(" 1 : Bases des tableaux ");
            let num = [10]
            let vr= new Array(10)
            console.log(num);
            console.log(vr);
            let table = new Array("mo", "amer", "mohamed");
            console.log(table);
            console.log(`Crer un tableau de 5 noms: \n  ${table}`);
            console.log(`Afficher le premier element : ${table[0]} \n Afficher le  dernier élément.: ${table[4]}`);
            table[0] = "m";
            console.log(`Remplacer  le premier element par : \n${table[0]}`);
      console.log(" Partie 2 : Methodes simples (push, pop, shift, unshift) ");
      table.push("m");
      console.log(`tableau apres l'ajout d'element a la fin: \n  ${table}`);
      table.unshift("m");
      console.log(`tableau apres l'ajout d'element au debut: \n  ${table}`);
      table.pop("m");
      console.log(`tableau apres la suppressionn d'element a la fin: \n  ${table}`);
      table.shift("m");
      console.log(`tableau apres la supressipn  d'element au debut : \n  ${table}`);
      // Créer un menu où l’apprenant manipule une liste "pile" ou "file".

      console.log("3 : Parcours des tableaux ");
      /*
      Exercices
  Parcourir et afficher un tableau.Calculer la somme d’un tableau de nombres.Afficher les noms de plus de 5 lettres.
      */
      for(let i=0; i<table.length; i++){
            console.log(table[i]);
      }
     
      for(let i of table){
            console.log(i);
      }
    
      for(let i in table){
            console.log(table[i]);
      }
    
      let i=0;
      do{
            console.log(table[i]);
            i++;
      }while(i < table.length);
     
      let nombres = [9,4,5,6,7]
      let somme = 0
      for(let i of nombres){
            somme += i;
      }
      console.log("somme: ",somme);
    
      for(let name of table){
            if(name.length >= 6)
                  console.log(name);
      }

      console.log(" 4 : Rechercher dans un tableau");
      console.log(table.find(e => e == "ali"));
      console.log(table.findIndex(e => e == "ali"));
      console.log(table.includes("ali"));
      console.log(nombres.find(e => e%2 == 0));
      console.log(table.find(e => e == "ali"));

      let joueurs = [
            {id:1,
            nom:"m"
            },
            {id:2,
            nom:"amine"
            },
            {id:3,
            nom:"oussama"
            }
      ]
    
      console.log(joueurs.find(joueur => joueur.id == 3))
      
      console.log("5 : Filtrer un tableau");
      let nbr = [1, 2, 4, 10, 20, 30, 23, 0];
      console.log(nbr.filter(n => n>=10));

      let etudiants = [
            {moyene: 10,
            nom:"m",
            post: "it"
            },
            {moyene: 20,
            nom:"mo",
            post: "marketing"
            },
            {moyene: 16,
            nom:"oussama",
            post: "netoyagge"
            },
            {moyene: 16,
            nom:"mohammed",
            post: "netoyage"
            }
      ]
      console.log(etudiants.filter(etd => etd.moyene >= 12));
      console.log(etudiants.filter(etd => etd.post === "netoyage"));

      console.log(" 6 : Transformer un tableau ");
      console.log(nbr);
      console.log(nbr.map(n => n*2))
      console.log(nbr);
      console.log(etudiants.map(etd => etd.nom));
      etudiants.map(etd =>{
            etd.isActive = true;
            console.log(etd)
      });
      console.log(etudiants);

      console.log(" Trier et ordonner un tableau");
      console.log(nbr.sort());
      console.log(nbr.sort((a,b) => a-b)); 
      console.log(nbr.sort((a,b) => b-a)); 
      function sortArray(x, y){
            if(x.post < y.post)
                  return -1;
            if(x.post > y.post)
                  return 1;
            return 0;
      }
      var s = etudiants.sort(sortArray);
      console.log(s);
      
      console.log("/Mise à jour et suppression dans un tableau d'objets ");
      /*
     Exercices Modifier un étudiant dans une liste par son id. Supprimer un joueur avec filter(). Incrémenter l’âge de chaque personne.
      */
      nbr[0] = 1200;
      console.log(nbr);
      console.log(joueurs)

      joueurs = joueurs.filter(joueur => joueur.id > 1)
      console.log(joueurs)
      
      joueur = joueurs.map(joueur => {
            joueur.id += 1;
      })
      console.log(joueurs);