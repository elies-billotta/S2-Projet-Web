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

    const form = document.getElementById("form");
    let tryInput = document.getElementById("try");
    let reponse = "Dune" // réponse attendue
    
    let userName; 
    let level; 
    let timer = 60; 


    //formater chaine
        function formaterChaine(word){
            word = word.toLowerCase(); //maj
            word =  word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");//accents
            return word; 
        }
        

   //Bonne réponse ? 
    reponse = formaterChaine(reponse); 
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let essai = formaterChaine(tryInput.value); 
        if (essai !== reponse) {
            const newLi = document.createElement("li");
            newLi.textContent = tryInput.value;
            ulHistorique.insertBefore(newLi, ulHistorique.firstChild);
            tryInput.value = ""; 
            return;
        }
        form.submit(); //CHANGER DE FILM ET AJOUTER DES POINTS 
        // ne pas submit pour ne pas recharger la page
      });
 
      
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

    

    //display game & user info
    goBtn.addEventListener("click", function(){
        userName = document.getElementById("nickname").value;
        level = document.getElementById("level").value;
        corpus.style.display = "none";
        game.style.display = "flex"; 

        displayUsername.innerHTML = userName; 
        displayLevel.innerHTML = level; 
  
        
        setInterval(chrono, 1000)
        
    });



    

    







});