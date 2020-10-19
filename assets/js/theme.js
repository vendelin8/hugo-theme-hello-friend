// Toggle theme

var currentTheme = window.localStorage && window.localStorage.getItem("theme");
if (currentTheme === "null") {
  currentTheme = null;
}
currentTheme = currentTheme || "colored";
if (currentTheme !== "colored") {
  document.body.classList.remove("colored-theme");
}

function toggleTheme() {
  if (currentTheme !== "light") {
    document.body.classList.add(currentTheme + "-theme");
  }
}
toggleTheme();

document.querySelector(".theme-toggle").addEventListener("click", () => {
  document.body.classList.remove(currentTheme + "-theme");
  switch (currentTheme) {
    case "dark":
      currentTheme = "colored";
      break;
    case "colored":
      currentTheme = "light";
      break;
    case "light":
      currentTheme = "dark";
      break;
  }
  toggleTheme();
  window.localStorage && window.localStorage.setItem("theme", currentTheme);
});
