let account_data = document.querySelectorAll('.account_data');
let sideCategoryItem  = document.querySelectorAll('.sideCategoryItem li');

sideCategoryItem.forEach((e)=>{
    // e.classList.remove('account_dataActivation');
    e.addEventListener("click", (e) => {
        // document.querySelector('.sideCategoryItem.account_dataActivation').remove('account_dataActivation')
        e.target.classList.add('account_dataActivation')
           this.style.display = 'block'
    })
    // e.addEventListener("click", remo)
    e.addEventListener("click", items)
    e.classList.remove("account_dataActivation")
    //alert(',dfjkfj')
    })
// function for adding and remove account_dataActivation class 


// function for  hide all elements 
function items(){
    account_data.forEach((el)=>{
 el.style.display = 'none';
})
document.querySelectorAll(this.getAttribute('data-filter')).forEach((el) => {
    el.style.display = 'inline'
})
}



// start account custom edit action_save
const editBtn = document.querySelectorAll('.action_edit');
const saveBtn = document.querySelectorAll('.action_save');
const AllInpu = document.querySelectorAll('.inp');
const InpName = document.querySelector('#name');
editBtn.forEach(e => {
     e.addEventListener('click', () => {
        // e.style.display = 'none';
          InpName.disabled = false;
                InpName.focus();
                InpName.select();
          saveBtn[0].classList.add('d-block');
        //  
    
        // 
      
     });
 });
 saveBtn.forEach(e => {
    e.addEventListener('click', () => {
       // e.style.display = 'none';
         InpName.disabled = true;
            //    InpName.focus();
            //    InpName.select();
        //  saveBtn[0].classList.add('d-block');
       //  
   
       // 
     
    });
});

