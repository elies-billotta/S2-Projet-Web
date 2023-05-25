
const modifyForm = document.getElementById('modifyForm');

const id = document.getElementById('id').value;
const nom = document.getElementById('nom').value;
const difficulte = document.getElementById('difficulte').value;
const image = document.getElementById('image').value;
const description = document.getElementById('description').value;

modifyForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const data = {
        id_film : id,
        nom: nom,
        description: description,
        difficulte: difficulte,
        image: image
    };
    console.log(data);
    fetch('/adminview/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response)=>{
        if(response.status === 200){
            alert('Film modifié avec succès');
            //window.location.href = '/adminview';
        }else{
            alert('Erreur lors de la modification du film');
            console.log(response);
        }
    });
  }
);

const deleteForm = document.getElementById('deleteForm');

deleteForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const data = {
        id_film : id
    };
    console.log(data);
    fetch('/adminview/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response)=>{
        if(response.status === 200){
            alert('Film supprimé avec succès');
            //window.location.href = '/adminview';
        }else{
            alert('Erreur lors de la suppression du film');
            console.log(response);
        }
    });
  }
);
