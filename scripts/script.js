"use strict";
const btnShow = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const container = document.getElementById("container");
const overlay = document.getElementById("overlay");

btnShow.addEventListener("click",()=>{
  container.classList.add("show");
  overlay.classList.add("show");
});

btnClose.addEventListener("click",()=>{
  container.classList.remove("show");
  overlay.classList.remove("show");
});
overlay.addEventListener("click",()=>{
  container.classList.remove("show");
  overlay.classList.remove("show");
});

document.addEventListener("keydown",(e)=>{
  if(e.key === "Escape"){
    container.classList.remove("show");
    overlay.classList.remove("show");
  }
})