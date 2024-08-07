const lightModeBtn = document.getElementById("lightModeBtn")
const darkModeBtn = document.getElementById("darkModeBtn")

darkModeBtn.addEventListener('click' , function () {
    darkModeBtn.classList.add('active')
    lightModeBtn.classList.remove("active")
    document.documentElement.setAttribute("data-bs-theme" , "dark")
    localStorage.setItem("theme" , "dark")
})
lightModeBtn.addEventListener('click' , function () {
    darkModeBtn.classList.remove('active')
    lightModeBtn.classList.add("active")
    document.documentElement.setAttribute("data-bs-theme" , "light")
    localStorage.setItem("theme" , "light")
})
window.addEventListener('load' , function () {
    let themeColor = localStorage.getItem("theme")
    console.log(themeColor);
    if (themeColor === "dark") {
        darkModeBtn.classList.add('active')
        lightModeBtn.classList.remove("active")
        document.documentElement.setAttribute("data-bs-theme" , "dark")
    } else if (themeColor === "light") {
        darkModeBtn.classList.remove('active')
        lightModeBtn.classList.add("active")
        document.documentElement.setAttribute("data-bs-theme" , "light")
    }
})
  