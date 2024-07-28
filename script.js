
// Getting Elements for DOM Manipulation

let formEl1=document.getElementById("form1");
let formEl2=document.getElementById("form2");
let nameEl=document.getElementById("username");
let passEl=document.getElementById("password");
let nameErrEl=document.getElementById("nameerrorMsg");
let passErrEl=document.getElementById("passerrorMsg");
let loginEl=document.getElementById("log");


// Adding Event for Form1 - Signup form

formEl1.addEventListener("submit",function(event){

    event.preventDefault();
    if(nameEl.value===""){
        nameErrEl.textContent="Required*";
    }
    else{
        nameErrEl.textContent="";
    }

    if(passEl.value===""){
        passErrEl.textContent="Required*";
    }
    else{
        passErrEl.textContent="";
    }
    if(nameEl.value!==""){
        if(nameEl.value.includes("@")){
            nameEl.value=nameEl.value;
        }
        else{
            nameErrEl.textContent="Enter Valid Email";
        }
    }

})

// Adding Event for From 2 - Login Form

formEl2.addEventListener("submit",function(event){

    event.preventDefault();
    if(nameEl.value===""){
        nameErrEl.textContent="Required*";
    }
    else{
        nameErrEl.textContent="";
    }

    if(passEl.value===""){
        passErrEl.textContent="Required*";
    }
    else{
        passErrEl.textContent="";
    }
    if(nameEl.value!==""){
        if(nameEl.value.includes("@")){
            nameEl.value=nameEl.value;
        }
        else{
            nameErrEl.textContent="Enter Valid Email";
        }
    }

})

// Adding toggle for changing login/signup page

loginEl.addEventListener("click",function(event){
    event.preventDefault();
    formEl1.classList.toggle("form-hidden");
    formEl2.classList.toggle("form-unhidden");
})


