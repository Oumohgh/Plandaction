  /*
      Exercices  Afficher localStorage dans la console.
      Faire un setItem("name", "a") et getItem("name").
      */
      console.log(localStorage);
     
      localStorage.setItem("name", "a");
      
      localStorage.getItem("name");
      console.log(localStorage.getItem("name")); 

      /*
      Exercices
      Ajouter, afficher et supprimer une donnée simple.
      Lister toutes les clés présentes.
      */
      localStorage.setItem("name", "moad");
      localStorage.setItem("name", "mohammed");
      localStorage.setItem("name", "messi");
      localStorage.getItem("name");
      console.log(localStorage.getItem("name"))
      console.log(localStorage.key(0))

      /*
      Exercices
      
      */
      console.log("JSON ");
      
      let obj = {
            id: 1,
            name: "Salah"
      }
      localStorage.setItem("joueur", JSON.stringify(obj));
      console.log(localStorage.getItem("joueur"));
      let objArray = [
      {
      "id": 1,
      "name": "moad"
      },
      {
      "id": 2,
      "name": "Abderzak"
      },
      {
      "id": 3,
      "name": "mohammed"
      }
]
localStorage.setItem("joueurs", JSON.stringify(objArray));
console.log(localStorage.getItem("joueurs"));
objArray[1].id=4;
console.log(objArray[1].id);
localStorage.setItem("joueurs", JSON.stringify(objArray));
console.log(localStorage.getItem("joueurs"));