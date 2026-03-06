console.log("Website Loaded")

const form = document.getElementById("loginForm")

if(form){

form.addEventListener("submit",function(e){

e.preventDefault()

alert("Login successful (demo)")

})

}