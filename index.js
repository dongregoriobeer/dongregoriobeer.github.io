require('dotenv').config(); // Carga las variables de entorno de .env

// Accede a la variable de entorno "DonPass"
const Pass = process.env.DonPass;

function Comprobacion() {
        // Verificar si no hay nada guardado en localStorage con la clave "DonPass"
        while(localStorage.getItem("DonPass") == null || localStorage.getItem("DonPass") == "") {
         // Pedir al usuario que ingrese una contraseña y guardarla en localStorage
         var userInput = prompt("Ingresa la contraseña:");
         // Verificar si el usuario canceló el prompt
         if (userInput === null) {
           alert("Por favor, ingresa una contraseña válida.");
         } else if (userInput.trim() === "") {
           // Si el usuario hizo clic en "Aceptar" sin ingresar nada, mostrar un mensaje
           alert("Por favor, ingresa una contraseña válida.");
         } else {
           // Si el usuario ingresó algo, guardar la contraseña en localStorage
           localStorage.setItem("DonPass", userInput);
         }
       }

    if(localStorage.getItem("DonPass") != Pass){
    window.location.href = "https://google.com/";
 }
}

let Ubicaciones = [
   "La Madrid", // Barril 1
   "La Madrid", // Barril 2
   "La Madrid", // Barril 3
   "La Madrid", // Barril 4
   "La Madrid", // Barril 5
   "La Madrid", // Barril 6
   "La Madrid" // Barril 7
];

function Ubicacion(Barril) {
  alert(Ubicaciones[Barril - 1]);
}

function Barril(barril) {
   window.location.href = `Barriles/${barril}`;
}

window.onload = function() {
   Comprobacion();
   
}