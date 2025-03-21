const switchButton = document.getElementById("switchTheme");
const html = document.querySelector("html");
switchButton.addEventListener("click", ()=>{
    document.documentElement.classList.toggle("darkMode");
    html.classList.toggle("darkMode")
})