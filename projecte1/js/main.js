let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};


/*let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;
si el semaforo que en este caso es el icono del menu es true, estara en blanco, es decir el menu esta abierto, y si esta cerrado es decir false, sea negro
document.querySelectorAll(".hamburguer")[0].addEventListener("click", function() {
    if (semaforo) {
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos")
})
*/
