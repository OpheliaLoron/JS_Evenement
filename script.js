// Savoir détecterun évènement utilisateur


// Etape 1 -> Sélectionner les éléments

let btn = document.querySelector('#toggle-rectangle');
let rect = document.querySelector('.rectangle');

// console.log(btn);
// console.log(rect);


// Etape 2 -> Créer les fonctions qui seront éxécutées par l'évènement

function cacherAfficher() {
    rect.classList.toggle('hide');
    // console.log(rect);
    // toggle -> Si la classe existe alors il la supprime, dans le cas inverse, il ajoute la classe
    // classList -> Pour gérer les classes (les ajouter ou les supprimer)
}

function addColorChange(){
    rect.classList.add('important');
    // add -> Ajoute le classe spécifiée en paramètre
}

function removeColorChange(){
    rect.classList.remove('important');
    rect.classList.add('retireSouris');
    // rect.classList.remove('doubleClick');
    console.log(rect);
    // remove -> supprime la classe spécifiée en paramètre
}

function addColorChangeGreen(){
    rect.classList.add('doubleClick');
}

function removeChangeGreen() {
    rect.classList.remove('doubleClick');
    rect.classList.add('good');
}


// Etape 3 -> Poser l'écouteur d'évènement pour l'intéraction

btn.addEventListener('click', cacherAfficher);
rect.addEventListener('mouseover', addColorChange);
rect.addEventListener('mouseout', removeColorChange);
rect.addEventListener('dblclick', addColorChangeGreen);
rect.addEventListener('mouseout', removeChangeGreen);

// syntaxe différente
// document.querySelector('#toggle-rectangle').addEventListener('click', function (){
//     rect.classList.toggle('hide');
// });


// exercice

// function addNewColor() {
//     rect.classList.add('doubleClick');
// }

// rect.addEventListener('dblclick', addNewColor);
// rect.addEventListener('mouseout', removeColorChange);


// ------------------ La propagation d'évènement ------------------ //

// Gestion du click sur le document
document.addEventListener('click', function(){
    console.log('Gestionnaire document');
});

// Gestion du click sur le paragraphe
document.querySelector('#para').addEventListener('click', function(){
    // console.log('Gestionnaire pararaphe');
    alert('Hello');
});

// Gestion du 'click' sur le bouton
// document.querySelector('#propa').addEventListener('click', function(){
//     console.log('Gestionnaire bouton');
// });

// Arrêt de la propagation
document.querySelector('#propa').addEventListener('click', function(event){
    alert('Hello');
    // document.querySelector('#propa').style.color = 'red';
    console.log('Gestionnaire bouton');
    event.stopPropagation();
    // Lors d'une action utilisateur via un écouteur d'evenement, un objet event est créé, et est récupérable via les paramètres de ma fonction. Cet objet a des méthodes disponibles dont 'event.stopPropagation()'
});