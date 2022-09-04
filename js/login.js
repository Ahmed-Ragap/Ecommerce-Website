let activePageLink = document.querySelector('#activePageLink')

// check is current page have name (----)
let docTitle = document.title
activePageLink = docTitle ==='login' ? activePageLink.classList.add('current_page'): alert('error') 
 
// import email and password  from localstorage 
let getEmail = localStorage.getItem('email')
let getPass = localStorage.getItem('psw')
// verifiy user   
let inputEmail = document.querySelector("#inputEmail");
let inputPass = document.querySelector("#inputPass");
let submit_button = document.querySelector("#submit_button");
// start click action to compare  data
submit_button.addEventListener('click', (e) =>{
    e.preventDefault();

    if(inputEmail.value === "" || inputPass.value ===""){
        alert('please fill all input data');
    }
    else if(inputEmail.value === getEmail && inputPass.value === getPass)
    {
        window.location.href = "../index.html";
    }
    else if(getEmail < 1){
        alert("you don't have previous account ")
     } 
    else {
        alert('wrong email or password 🤦‍♀️🤷‍♀️')
         }
   
    
})

// add toggle show  class to show and hide password 
let toggleShowPass = document.querySelector('#basic-addon1'); 

toggleShowPass.addEventListener('click',  (e)=> {
    let show = document.querySelector('.fa-eye');
let hide = document.querySelector('.fa-eye-slash');
show.classList.toggle("show_pass")
hide.classList.toggle("hide_pass")
// toggle show and disappear password in input filed
const changeInputAttr = inputPass.type === "password" ? inputPass.type = "text": inputPass.type = "password"

})
