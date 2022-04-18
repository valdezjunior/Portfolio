let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

/* OBS: MANEIRA MAIS SIMPLIFICADA

document.querySelector(".hamburguer");.addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu");
);

*/