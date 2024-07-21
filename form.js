var sidenavbar = document.querySelector(".sidenavbar")
var icon = document.getElementById("icon")
icon.addEventListener("click",function(){
    sidenavbar.style.left=0;
})

var closeiconside = document.getElementById("closeiconside")

closeiconside.addEventListener("click",function(){
    sidenavbar.style.left="-70%";
})