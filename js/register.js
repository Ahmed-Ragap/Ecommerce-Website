// check is current page have name (----)
let docTitle = document.title
let activePageLink = document.querySelector('#activePageLink')
activePageLink = docTitle === 'register' ? activePageLink.classList.add('current_page'): alert('register page')

// select email and password input 
var email=document.getElementById("exampleInputEmail1");
var psw =document.getElementById("exampleInputPassword1");
  var Submit = document.querySelector('#submit');
  Submit.addEventListener('click', (e)=>{
      e.preventDefault();
    // check is empty all input function (1)
    if(email.value === "" || psw.value ===""){
        alert('pless')
    }else{
        localStorage.setItem("email", email.value);
        localStorage.setItem("psw", psw.value);
        document.querySelector("#congrat").classList.add('animat');

        // do some delay time  before message disappear
        var y = 0; 
        var timeing = setInterval(() => {
        y++
        if(y >= 2){
            document.querySelector("#congrat").classList.remove('animat');
            clearInterval(timeing);
            // relocation to login page 
            window.location.href = "../login.html";
        }
    }, 2000
    ) ;
       
    }
   
  })



