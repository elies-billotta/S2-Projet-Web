const form = document.getElementById('form');
    let listeFilms;


window.addEventListener("DOMContentLoaded", (event) => {
    
//fetch pour recuperer les films
fetch('/api/get_all_film')
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            //afficher les films
            listeFilms = data;
            displayFilms(data);
        }
    }
    );


//fonction pour afficher les films
function displayFilms(data) {
    let films = document.getElementById('films');
    films.innerHTML = '';
    let html = '';
    data.forEach(film => {
        html += `<tr>
                    <td><a href="adminview/edit/${film.id_film}">${film.id_film}</a></td>
                    <td>${film.Nom}</td>
                    <td>${film.Image}</td>
                    <td>${film.Description}</td>
                    <td>${film.Difficulte}</td>
                </tr>`;
    });
    films.innerHTML = html;
}

function searchByTitre(){
    //on recherche le film par titre dans la liste
    let titre = document.getElementById('titre').value.toLowerCase();
    let films = document.getElementById('films');
    films.innerHTML = '';
    let html = '';
    listeFilms.forEach(film => {
        if (film.Nom.toLowerCase().includes(titre)){
        html += `<tr>
                    <td><a href="adminview/edit/${film.id_film}">${film.id_film}</a></td>
                    <td>${film.Nom}</td>
                    <td>${film.Image}</td>
                    <td>${film.Description}</td>
                    <td>${film.Difficulte}</td>
                </tr>`;
        }  
    });
    if (html == '') html = '<tr><td colspan="5">Aucun film trouvé</td></tr>'
    films.innerHTML = html;
}

function searchByDifficulte(){
    event.preventDefault();
    let difficulte = document.getElementById('level').value.toLowerCase();
    if (difficulte == "all"){
        displayFilms(listeFilms);
        return;
    }
    let films = document.getElementById('films');
    films.innerHTML = '';
    let html = '';
    listeFilms.forEach(film => {
        if (film.Difficulte == difficulte){
        html += `<tr>
                    <td><a href="adminview/edit/${film.id_film}">${film.id_film}</a></td>
                    <td>${film.Nom}</td>
                    <td>${film.Image}</td>
                    <td>${film.Description}</td>
                    <td>${film.Difficulte}</td>
                </tr>`;
        }  
    }
    );
    films.innerHTML = html;
}

form.addEventListener('submit', (event) => {
    let difficulte = document.getElementById('level').value.toLowerCase();
    event.preventDefault();
    if (document.getElementById('titre').value != ''){
        searchByTitre();
        document.getElementById('titre').value = '';
    } 
    else{
    if (difficulte == "all"){
        displayFilms(listeFilms);
        return;
    }
    let films = document.getElementById('films');
    films.innerHTML = '';
    let html = '';
    listeFilms.forEach(film => {
        if (film.Difficulte == difficulte){
        html += `<tr>
                    <td><a href="adminview/edit/${film.id_film}">${film.id_film}</a></td>
                    <td>${film.Nom}</td>
                    <td>${film.Image}</td>
                    <td>${film.Description}</td>
                    <td>${film.Difficulte}</td>
                </tr>`;
        }  
    }
    );
    films.innerHTML = html;
    }
});

});


