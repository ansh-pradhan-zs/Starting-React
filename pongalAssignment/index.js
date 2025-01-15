document
  .getElementById("submit-btn")
  .addEventListener("click", handleLocalStorage);
document.addEventListener("DOMContentLoaded", getStorageItems);
document
  .getElementById("save-greeting")
  .addEventListener("click", handleSaveGreeting);
document.getElementById("toggle-theme").addEventListener("click", () => {
  let color = getCookie("theme");

  if (color === "light") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    setCookie("theme", "dark", 7);
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    setCookie("theme", "light", 7);
  }
});

// ? setting theme cookies

function handleLocalStorage(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
}

function getStorageItems() {
  const color = getCookie("theme") || "light";
  document.body.classList.add(color);
  document.getElementById("getname").innerHTML = localStorage.getItem("name");
  document.getElementById("getemail").innerHTML = localStorage.getItem("email");

  document.getElementById("greet-msg").innerHTML =
    sessionStorage.getItem("greeting");
}

function handleSaveGreeting() {
  const greeting = document.getElementById("greet").value;
  sessionStorage.setItem("greeting", greeting);
}

function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const theme = name + "=";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(theme) === 0) {
      return cookie.substring(theme.length, cookie.length);
    }
  }
  return null;
}
