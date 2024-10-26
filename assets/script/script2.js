function calcular() {
  let valor1 = document.querySelector("#input1").value;
  let valor2 = document.querySelector("#input2").value;
  let valor3 = document.querySelector("#input3").value;
  let total = parseInt(valor1) + parseInt(valor2) + parseInt(valor3);
  let alerta = document.querySelector("#mensaje");
  if (total <= 10) {
    alerta.innerText = "Llevas " + total + " stickers";
  } else {
    alerta.innerText = "Llevas demasiados stickers";
  }
}

const enviar = document.querySelector("#boton");
enviar.addEventListener("click", calcular);
