console.log("https://www.nytimes.com/interactive/*"); // Example: https://www.nytimes.com/interactive/2021/world/covid-cases.html
let checks = 0;

const interval = setInterval(() => {
  console.log("checking");
  checks += 1;

  if (checks == 40) {
    clearInterval(interval);
    console.log("stopped checking, max 40 attempts");
  }
  let target = document.getElementById("standalone-footer"); // https://prnt.sc/1ynh26f
  if (target) {
    console.log("removed and stopped checking");
    target.remove();
    target = document.getElementById("site-content"); // https://prnt.sc/1ynh6h5
    target.style = "";
    clearInterval(interval);
  }
}, 250);
