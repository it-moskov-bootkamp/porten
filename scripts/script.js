document.querySelector(".burger__menu").addEventListener("click", (e) =>{
    e.preventDefault()
    document.querySelector(".header__menu").classList.toggle("burger")
    document.querySelector('.burger__menu').classList.toggle("burger__active")
})

