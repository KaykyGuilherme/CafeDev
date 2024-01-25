const nav__all = document.querySelector(".nav__all")

const nav__hamburguer = document.querySelector(".nav__hamburguer")
nav__hamburguer.addEventListener("click", () =>{

    nav__all.classList.toggle("nav__acitve")
})

const exit__hamburguer = document.querySelector(".exit__hamburguer")
exit__hamburguer.addEventListener("click", () =>{
    nav__all.classList.remove("nav__acitve")
})