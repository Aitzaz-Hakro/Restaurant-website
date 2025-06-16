var xmark= document.querySelector(".xmark");
var sidebarr= document.querySelector(".sidebar");

xmark.addEventListener("click",ShowsideBar());

function ShowsideBar(){

   sidebarr.style.visibility = "hidden";
   sidebarr.style.backgroundcolor = "yellow ";
}