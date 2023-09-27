// getting both signin and signup btns
const signUpBtn=document.querySelector("#sign-up-btn")
const signInBtn=document.querySelector("#sign-in-btn")

// getting the heading
let heading=document.querySelector("#main-heading")

// getting the name input field
const nameField=document.querySelector("#name-field")

// adding event listener to both signin and signup button
signInBtn.addEventListener("click",function(){
    nameField.style.maxHeight="0"
    heading.style.opacity=0

    setTimeout(()=>{

        heading.innerHTML="Sign In"
        heading.style.opacity=1
    },1000)
    signUpBtn.classList.add("disable")
    signInBtn.classList.remove("disable")
})
signUpBtn.addEventListener("click",function(){
    nameField.style.maxHeight="60px"
    heading.style.opacity=0
    setTimeout(()=>{

        heading.innerHTML="Sign Up"
        heading.style.opacity=1
    },1000)
    signInBtn.classList.add("disable")
    signUpBtn.classList.remove("disable")
})
