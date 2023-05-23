
// Updated upstream:static/script.js
window.addEventListener("DOMContentLoaded", (event) => {
    
    
    const goBtn = document.getElementById("go");
    const corpus = document.getElementById("corpus");
    const game = document.getElementById("game");
    const endGame = document.getElementById("endGame"); 
   
    const displayUsername = document.getElementById("displayUsername");
    const displayLevel = document.getElementById("displaylevel");
    const displayEndLevel = document.getElementById("displayEndLevel");
    const displayTime = document.getElementById("time");
    const displayEndJoueur = document.getElementById("displayEndJoueur");

    const ulHistorique = document.getElementById("ulHistorique");

    const afficheImg = document.getElementById("afficheImg");

    const form = document.getElementById("form");
    let tryInput = document.getElementById("try");
    let reponse = "test"; 
    
    let userName; 
    let level; 
    let timer = 600; 


    let filmId;
    let filmImage;
    let filmNom;
    let filmDifficulte;


    //formater chaine
        function formaterChaine(word){
            word = word.toLowerCase(); //maj
            word =  word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");//accents
            return word; 
        }
        


      
    function chrono(){
        if(timer > 0){
            timer = timer - 1; 
            displayTime.innerHTML = timer.toFixed(0); 
        }
        else{
            endGame.style.display = "flex";
            displayEndLevel.innerHTML = level;  
            displayEndJoueur.innerHTML = userName;  
        }
        
    }


function callFilm(){
    //Formater les maj de level 
    level = formaterChaine(level);
    fetch(`/api/getfilm/${level}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
            // Gérer l'erreur 
            console.error(data.error);
            } 
            else {
            // Film retournées par l'API
            filmId = data.id_film;
            filmImage = data.Image;
            filmNom = data.Nom;
            filmDifficulte = data.Difficulte;
            
            console.log(`Film ID: ${filmId}`);
            console.log(`Film Image: ${filmImage}`);
            console.log(`Film Nom: ${filmNom}`);
            console.log(`Film Difficulte: ${filmDifficulte}`);

            //Intégrer les infos 
            afficheImg.src = filmImage; 
            reponse = filmNom; 

    }
        })
        .catch(error => {
            // Gérer les erreurs de la requête
            console.error("Une erreur s'est produite lors de la récupération du film :", error);
        });
}


    




   //Bonne réponse ? 
   form.addEventListener('submit', (event) => {
       event.preventDefault();
       let essai = formaterChaine(tryInput.value); 
       reponse = formaterChaine(reponse);
       console.log('vérif : ')
       console.log(reponse); 
       console.log(essai); 
       if (essai !== reponse) {
           const newLi = document.createElement("li");
           newLi.textContent = tryInput.value;
           ulHistorique.insertBefore(newLi, ulHistorique.firstChild);
           tryInput.value = ""; 
           return;
       }
       tryInput.value = "";
       //est-ce qu'on supprime l'historique des mauvaises réponses également ? 
       callFilm();
    
     });


    //display game & user info
    goBtn.addEventListener("click", function(){
        userName = document.getElementById("nickname").value;
        level = document.getElementById("level").value;
        corpus.style.display = "none";
        game.style.display = "flex"; 

        displayUsername.innerHTML = userName; 
        displayLevel.innerHTML = level; 

        callFilm();
  
        
        setInterval(chrono, 1000)
        
    });

    




    

    







});
