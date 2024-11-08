// Fonction pour basculer entre le mode clair et sombre
function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

// Appliquer le mode préféré de l'utilisateur au chargement
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    // Si aucune préférence n'est enregistrée, on utilise le mode clair par défaut
    document.documentElement.setAttribute("data-theme", "light");
  }
};
