let modeBtn = document.querySelector("#mode")
let bdy = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click",() => {
  if(currMode === "light"){
    bdy.setAttribute("class","dark");
    modeBtn.innerText = "Light Mode";
    currMode = "dark";
  } else if(currMode === "dark"){
    bdy.setAttribute("class","light");
    modeBtn.innerText = "Dark Mode";
    currMode = "light";
  }
});