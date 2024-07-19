const translations = {
  fr: {
    title: "Jeux Olympiques de Paris 2024",
    text: 'Un ensemble de ressources non exhaustif mais conséquent, relatives aux Jeux Olympiques et Paralympiques de Paris 2024, est disponible <a href="https://github.com/Corentin-Lcs/paris-2024-olympic-games-resources" target="_blank">ici</a> (documentation, logos, phryges, etc.).'
  },
  en: {
    title: "Paris 2024 Olympic Games",
    text: 'A substantial but non-exhaustive set of resources related to the Paris 2024 Olympic and Paralympic Games is available <a href="https://github.com/Corentin-Lcs/paris-2024-olympic-games-resources" target="_blank">here</a> (documentation, logos, phryges, etc.).'
  }
};

function updateLanguage(language) {
  document.getElementById("title").textContent = translations[language].title;
  document.getElementById("text").innerHTML = translations[language].text;
}

updateLanguage("fr");

function updateTheme() {
  var theme = localStorage.getItem("theme");
  var svgImage = document.getElementById("logo");
  var lightModeSrc = "./assets/Logo Officiel - Jeux De Paris 2024 - Clair.svg";
  var darkModeSrc = "./assets/Logo Officiel - Jeux De Paris 2024 - Sombre.svg";
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    svgImage.setAttribute("src", darkModeSrc);
  } else {
    document.body.classList.remove("dark-mode");
    svgImage.setAttribute("src", lightModeSrc);
  }
}

updateTheme();

document.getElementById("sun-icon").addEventListener("click", function() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
  updateTheme();
});

document.getElementById("moon-icon").addEventListener("click", function() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
  updateTheme();
});

const frBtn = document.getElementById("fr-btn");
const enBtn = document.getElementById("en-btn");

frBtn.addEventListener("click", function() {
  updateLanguage("fr");
});

enBtn.addEventListener("click", function() {
  updateLanguage("en");
});