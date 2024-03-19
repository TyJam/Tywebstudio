const pink = document.getElementById("service");

pink.addEventListener("click", () => {
  pink.classList.toggle("dropdown-content");
  console.log("I was clicked");
});
