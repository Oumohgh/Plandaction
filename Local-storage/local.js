    function loadData(){
            let playerList = getDataFromLocalStorageIfExist("players");
            renderCardPlayers(playerList);
      }

      function getDataFromLocalStorageIfExist(key){
            let dataLocalStorage = localStorage.getItem(key);
            return dataLocalStorage ? JSON.parse(dataLocalStorage) : [];
      }

      function sauvegarderDataToLocalStorage(key, dataList){
            localStorage.setItem(key, JSON.stringify(dataList));
      }

      let lastId = 0;
      function generateId(){
            let playerList = getDataFromLocalStorageIfExist("players");
            if(playerList.length === 0) return 1;
            return playerList[playerList.length -1].id + 1;
      }

      function addPlayer(nom, age){
            let playerList = getDataFromLocalStorageIfExist("players");
            let id= generateId();
            let player = {
                  id: id,
                  nom: nom,
                  age: age
            } 
            playerList.push(player);
            renderCardPlayers(playerList);
            sauvegarderDataToLocalStorage("players", playerList);

      }

      function delatePlayerById(id){
            let playerList = getDataFromLocalStorageIfExist("players");
            playerid = playerList.findIndex(player => player.id == id)
            if(playerid == -1){
                  console.log("player not existe!")
            }
            playerList.splice(playerid, 1);
            sauvegarderDataToLocalStorage("players", playerList);
            renderCardPlayers(playerList);
      }

      function updatePlayer(id, nom, age){
            let playerList = getDataFromLocalStorageIfExist("players");
            playerUpdated = playerList.find(player => player.id == id)
            playerUpdated.nom = nom;
            playerUpdated.age = age;
            sauvegarderDataToLocalStorage("players", playerList);
      }
      
      function showPlayers(){
      let playerList = getDataFromLocalStorageIfExist("players");
      if(playerList.length){
            console.log(`playerList: \n`)
            playerList.forEach(player =>{
            console.log(`player : ${player.id}\t${player.nom} \t ${player.age} \n`);
      })
      }else{
            console.log(`playerList is empty`);
      }
}

      function formAjout(){
      document.forms["addPlayer"].addEventListener("submit", (event) => {
            event.preventDefault();
            let form = event.target;
            addPlayer(form.nomInput.value, form.ageInput.value);
      });
      }

function  renderCardPlayers(playerList){
      document.getElementById("playerContainer").innerHTML = renderListPlayers(playerList);
      document.querySelectorAll(".supprimerBtn").forEach(btn => {
            btn.addEventListener("click", () =>{
                  let idPlayer=btn.getAttribute("data-index");
                  delatePlayerById(idPlayer);
            })
      })
}

function renderListPlayers(playersList){
      let cardPlayer = "";
      playersList.map(player =>{
            cardPlayer += renderPlayer(player);
      })
      return cardPlayer;
}

function renderPlayer(player){
      return `
            <div class="card" type="button" >
                  <h2>${player.id}</h2>
                  <h2>${player.nom}</h2>
                  <h2>${player.age}</h2>
                  <button class="supprimerBtn" data-index=${player.id}>Supprimer</button>
            </div>
            `
}

function initApp(){
            let playerList= getDataFromLocalStorageIfExist("players");
            loadData();
            formAjout();
      }
      initApp();
