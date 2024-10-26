function borde() {
  let img = document.querySelector("#imagen");
  if (img.style.border == "") {
    img.style.border = "solid 2px red";
  } else {
    img.style.border = "";
  }
}

const Click = document.querySelector("#imagen");
Click.addEventListener("click", borde);
