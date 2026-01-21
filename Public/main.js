//
// Récupération des éléments du DOM
const monInput = document.getElementById('monInput');
const monInput2 = document.getElementById('monInput2');
const monBouton = document.getElementById('monBouton');
const userSelectedButton = document.getElementById('userSelectedButton');
 

userSelectedButton.addEventListener('click', () => {
    const usersList = document.getElementById('usersList');
    const selectedUserId = usersList.value;     
    alert('Utilisateur sélectionné ID : ' + selectedUserId);
});

// Ajout d'un écouteur d'événement sur le bouton
monBouton.addEventListener('click', () => {
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputValue: monInput.value, inputValue2: monInput2.value })     
    }).then(response => response.text())
      .then(data => {
          alert(data);
      });
});

window.onload = () => {
    fetch('/users')
    .then(response => response.json())
    .then(users => {
        const usersList = document.getElementById('usersList');
        users.forEach(user => {
            //création d'un input select option avec id en value et login en texte  
            const option = document.createElement('option');
            option.value = user.id;
            option.text = user.login;
            usersList.appendChild(option);  
            
        });
    });
}









