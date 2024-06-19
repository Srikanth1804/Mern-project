let addbtn=document.getElementById("add-btn")
let cover=document.querySelector(".cover")
let form=document.getElementById("form")

addbtn.addEventListener("click",function(){
    cover.style.display="block";
    form.style.display="block"
})

let closecontent=document.getElementById("close-content")
closecontent.addEventListener("click",function(event){
    event.preventDefault()
     cover.style.display="none";
    form.style.display="none"
})

let container=document.querySelector(".container")
let actorname=document.getElementById("actorname")
let moviename=document.getElementById("moviename")
let comments=document.getElementById("comments")
let addcontent=document.getElementById("add-content")

addcontent.addEventListener("click",function(event){
    event.preventDefault()
    if (actorname.value.trim() === "" || moviename.value.trim() === "" || comments.value.trim() === "") {
        alert("Please fill in all fields.");
    }
    else{
    let div=document.createElement("div")
    div.setAttribute("class","data-container")
    div.innerHTML=` <h2>${actorname.value}</h2>
            <h5>${moviename.value}</h5>
            <p>${comments.value}</p>
             <button id="delete-btn" onclick="deleteitem(event)">Delete</button>`
            container.append(div)
              cover.style.display="none";
    form.style.display="none"}
})
function deleteitem(event){
event.target.parentElement.remove()
}

