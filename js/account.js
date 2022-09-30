let account_data = document.querySelectorAll('.account_data');
let sideCategoryItem  = document.querySelectorAll('.sideCategoryItem li');
let Item1  = document.querySelector('.item1');

sideCategoryItem.forEach((e)=>{

    e.addEventListener("click", (e) => {
        e.stopPropagation();
      action();
        e.target.classList.add('account_dataActivation')
    })
    e.addEventListener("click", items)
    e.classList.remove("account_dataActivation")

    function action() {
        sideCategoryItem.forEach((ele) => {
            ele.classList.remove('account_dataActivation');
        })
      
    }
    })
    // active class for first element
    Item1.classList.add('account_dataActivation')


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
        e.style.display ='none';
        e.parentNode.querySelector('.action_save').style.display = 'block'
        const  EditAction = e.parentNode.querySelector('.inp');
        EditAction.disabled = false;
        EditAction.focus();
        EditAction.select();
        console.log(EditAction )
        //  
    
        // 
      
     });
 });
  saveBtn.forEach(e => {
     e.addEventListener('click', () => {
         e.style.display ='none';
         e.parentNode.querySelector('.action_edit').style.display = 'block'
         const  EditAction = e.parentNode.querySelector('.inp');
         EditAction.disabled = true;
        console.log(EditAction )
   
         
     
     });
 });

