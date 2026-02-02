const btPlus = document.querySelector('.js_plus ');
const conteneur_transport = document.querySelector('.conteneur_transport');

btPlus.addEventListener('click', ouvreferme);

function ouvreferme(){ 
    conteneur_transport.classList.toggle('conteneur-transport-invisible');
}