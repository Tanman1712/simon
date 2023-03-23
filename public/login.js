function login() {
  const nameEl = document.querySelector("#name");
  localStorage.setItem("userName", nameEl.value);
  localStorage.setItem('pb', undefined);
  window.location.href = "play.html";
}