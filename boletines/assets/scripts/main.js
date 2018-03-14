//DOM
//querySelector - querySelectorAll
/*let link = document.querySelectorAll("a");
link.forEach(function(){
  console.log(link);
})*/
let links = document.querySelectorAll(".close");

links.forEach(function(link){
  link.addEventListener("click", function(ev){
    ev.preventDefault();
/*let iconos= document.querySelectorAll("i");

iconos.forEach(function(icono){
icono.classList.remove("content");
icono.classList.add("little-main");
})*/
  let content = document.querySelector(".content");
//Quitarle las animaciones que tiene
    content.classList.remove("jackInTheBox");
    content.classList.remove("animated");
//Agregar clases para animar su salida
    content.classList.add("jackInTheBox");
    content.classList.add("animated");

    setTimeout(function(){
      location.href ="/boletines";
     },1000);
//setInterval
    return false;
  });
});
