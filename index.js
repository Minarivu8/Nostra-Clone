
var offbar = document.querySelector(".offbar")
var closeicon = document.getElementById("closeicon")

closeicon.addEventListener("click",function(){
    offbar.style.display="none"
})

var sidenavbar = document.querySelector(".sidenavbar")
var icon = document.getElementById("icon")
icon.addEventListener("click",function(){
    sidenavbar.style.left=0;
})

var closeiconside = document.getElementById("closeiconside")

closeiconside.addEventListener("click",function(){
    sidenavbar.style.left="-70%";
})


var sliderleft = document.getElementById("slideleft")
var sliderright =document.getElementById("slideright")
var sliderimage= document.querySelector(".slides")
var index=0

console.log(sliderleft)

sliderright.addEventListener("click",

function(){
   index=index+100

    if(index>200)
    {
        index=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+index+"vw";
    }
    
   

}
)

sliderleft.addEventListener("click",

function(){

    if(index==0)
    {
       
       index=200
        sliderimage.style.marginLeft="-"+index+"vw";
    }
    else{

        index=index-100
    sliderimage.style.marginLeft="-"+index+"vw";
    }
    
    
}
)


