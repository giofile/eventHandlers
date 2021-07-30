const button = document.querySelector("#mybutton");
const changeBtn = document.querySelector("#changebtn");


button.addEventListener('click', function(){
    console.log("button clicked");
    alert("button clicked")
})


const color = function(){
    document.body.classList.toggle("red-background")
 
}

changeBtn.addEventListener('click', color)
