//
// Récupération des éléments du DOM
const monInput = document.getElementById('monInput');
const monBouton = document.getElementById('monBouton');

 

// Ajout d'un écouteur d'événement sur le bouton
monBouton.addEventListener('click', () => {
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputValue: monInput.value })     
    }).then(response => response.text())
      .then(data => {
          alert(data);
      });
});



