let Ubicaciones = ["La Madrid","La Madrid","La Madrid","La Madrid","La Madrid","La Madrid","La Madrid"];
let Pass = 5277;

function Ubicacion(Barril) {
  if (localStorage.getItem("DonPass") == Pass) {
    alert(Ubicaciones[Barril]);
  } else {
    let Prompt = prompt("Ingresa la contraseña");
    localStorage.setItem("DonPass", Prompt);
  }
}

function Barril1() {
  Ubicacion(0);
}

function Barril2() {
  Ubicacion(1);
}

function Barril3() {
  Ubicacion(2);
}

function Barril4() {
  Ubicacion(3);
}

function Barril5() {
  Ubicacion(4);
}

function Barril6() {
  Ubicacion(5);
}

function Barril7() {
  Ubicacion(6);
}
