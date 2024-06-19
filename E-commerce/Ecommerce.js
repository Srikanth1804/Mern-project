let togglebar=document.querySelector(".navbar-toggle-bar")
let slidebar=document.querySelector(".slide-bar")
togglebar.addEventListener("click",function(){
        slidebar.style.left="0"
})
let closebtn=document.getElementById("closebtn")
closebtn.addEventListener("click",function(){
    slidebar.style.left="-50%"
})