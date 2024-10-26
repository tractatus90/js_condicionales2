function corroborar() {
  let digito1 = document.querySelector("#valor1").value;
  let digito2 = document.querySelector("#valor2").value;
  let digito3 = document.querySelector("#valor3").value;
  let password = digito1 + digito2 + digito3;
  let alerta = document.querySelector("#mensaje");
  if (password == "911") {
    alerta.innerText = "Contraseña 1 correcta";
  } else if (password == "714") {
    alerta.innerText = "Contraseña 2 correcta";
  } else {
    alerta.innerText = "Contraseña incorrecta";
  }
}

const enviar = document.querySelector("#boton");
enviar.addEventListener("click", corroborar);
