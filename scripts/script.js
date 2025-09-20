const body = document.body;
const minimized = document.getElementById("minimized");
const theme = document.getElementById("theme");
const menuItems = document.querySelectorAll('.m-item');

minimized.addEventListener("click", () => {
  body.classList.toggle("min");
});

theme.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((elem) => {
      elem.classList.remove('active');
    });
    item.classList.add('active');
  });
});