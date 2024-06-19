let productcontainer=document.querySelector(".products")
let Search=document.getElementById("Search")
let productlist=productcontainer.querySelectorAll("div")


Search.addEventListener("keyup",function(){
let Enteredtext=event.target.value.toUpperCase()

for(count=0;count<productlist.length;count++){
    let productname=productlist[count].querySelector("p").textContent.toUpperCase()
    if(productname.indexOf(Enteredtext)<0){
        productlist[count].style.display="none"
    }
    else{
        productlist[count].style.display="block"
    }
}


})

let togglebar=document.querySelector(".navbar-toggle-bar")
let slidebar=document.querySelector(".slide-bar")
togglebar.addEventListener("click",function(){
        slidebar.style.left="0"
})
let closebtn=document.getElementById("closebtn")
closebtn.addEventListener("click",function(){
    slidebar.style.left="-50%"
})