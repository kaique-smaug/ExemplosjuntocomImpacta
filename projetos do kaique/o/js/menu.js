let menu = document.querySelector(".menu");
let buttunMenu = document.querySelector(".icone");

buttunMenu.addEventListener("click", function (event){
     event.preventDefault();
     menu.classList.toggle("aberto");


});
