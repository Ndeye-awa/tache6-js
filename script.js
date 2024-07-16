// var mois = [ 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet' ];

// // Retirer le dernière valeur du tableau mois
// mois.pop();
// console.log(mois);

// // Afficher les valeurs du tableau en utilisant la méthode document.write
// document.write('janvier ', 'février ', 'mars ', 'avril ', 'mai ', 'juin ', 'juillet '   + '<br>');

// // Ajouter la valeur ‘août’ à la fin du tableau
// mois.push('aout');
// console.log(mois);

// // Remplacer la valeur 'février' par ‘février’
// mois.splice(1, 'février');
// console.log(mois);

// // Afficher le nombre de valeurs du tableau en utilisant la méthode document.write
// document.write('le nombre de valeurs du tableau est:' + " " + mois.length  + '<br>');

// // Afficher la troisième valeur du tableau
// document.write("Troisième valeur du tableau : "  + mois[2]);

// -----------------------PROJET -------------------------

let nombreAleatoire = Math.floor(Math.random() * 91) + 10; // Nombre aléatoire entre 10 et 100
console.log(nombreAleatoire);
let nombreEssai = 10; // Nombre d'essais autorisés
const inputEssai = document.getElementById("inputEssai");
const buttonEssai = document.getElementById("buttonEssai");
const monNombre = document.getElementById("monNombre");
const newEssai = document.getElementById("tenEssai");

monNombre.textContent = ""; // Clear initial feedback message

buttonEssai.addEventListener("click", () => {
    let utilisateurEssai = parseInt(inputEssai.value);
    
    if (isNaN(utilisateurEssai) || utilisateurEssai < 10 || utilisateurEssai > 100) {
    monNombre.textContent = "Veuillez entrer un nombre valide entre 10 et 100.";
    return;
  }

  nombreEssai--;
  newEssai.textContent = nombreEssai;

  if (utilisateurEssai === nombreAleatoire) {
    monNombre.textContent = `Félicitations ! Vous avez deviné le nombre en ${
      10 - nombreEssai
    } essais.`;
    buttonEssai.disabled = true;
  } else if (nombreEssai === 0) {
    monNombre.textContent = `Désolé, vous avez épuisé tous vos essais. Le nombre était ${nombreAleatoire}.`;
    buttonEssai.disabled = true;
  } else if (utilisateurEssai > nombreAleatoire) {
    monNombre.textContent = "Le nombre est plus petit.";
  } else {
    monNombre.textContent = "Le nombre est plus grand.";
  }
});
