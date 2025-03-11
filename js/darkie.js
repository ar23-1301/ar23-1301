const toggleDarkMode = document.createElement("button");
toggleDarkMode.innerText = "🌙 Toggle Dark Mode";
toggleDarkMode.style.position = "fixed";
toggleDarkMode.style.top = "10px";
toggleDarkMode.style.right = "10px";
toggleDarkMode.style.padding = "4px";
toggleDarkMode.style.cursor = "pointer";
toggleDarkMode.style.borderRadius= "14px";
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // para que se pase de pagina a pagina 
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}