// Configuration file for website

// Set theme to the user's preferred color scheme
function updateTheme() {
    const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ?
      "dark" :
      "light";
    document.querySelector("html").setAttribute("data-bs-theme", colorMode);
}

updateTheme()

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme)

console.log(
    "Oh hey there!\nHow are you today?\nI'm doing good myself."
);