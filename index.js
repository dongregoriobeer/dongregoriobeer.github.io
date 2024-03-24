const Pass = 5277

document.addEventListener("DOMContentLoaded", Comprobacion())
function Comprobacion() {
    while(localStorage.getItem("DonPass") == "" || localStorage.getItem("DonPass") == null){
    window.location.href = "https://dongregoriobeer.github.io/index.html";
 }

    if(localStorage.getItem("DonPass") != Pass){
    window.location.href = "https://google.com/";
 }
}

let Ubicaciones = ["La Madrid", "La Madrid", "La Madrid", "La Madrid", "La Madrid", "La Madrid", "La Madrid"];

function Ubicacion(Barril) {
  alert(Ubicaciones[Barril - 1]);
}
