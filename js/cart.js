// remove cart item
const removeCartBtn = document.querySelectorAll('.removeBtn');
removeCartBtn.forEach((ele) =>{
ele.addEventListener("click", (e) => {
    e.preventDefault()
    e.target.parentNode.parentElement.closest('.cartItem').remove();
  })
})

// decress item
const decrees = document.querySelectorAll('.decrees');
let count = 0 ;

decrees.forEach((e)=>{
   
    e.addEventListener("click", (i) => {
         let toNumber = parseInt(i.target.nextElementSibling.innerHTML);
      console.log(toNumber)
        i.target.nextElementSibling.innerHTML =  count--;
       var val = i.target.nextElementSibling.innerHTML;
      //  updateTotal();
      const total = i.target.parentNode.nextElementSibling;
      let total_toN = parseInt(total.innerText);
      console.log(total_toN)
     total.innerHTML = toNumber * total_toN + ' EGP'


     if (val < 1) {
       val = 1;
       i.target.nextElementSibling.innerHTML = val;
    //    e.style = `
    //    border:5px double #f50;
         
    //    `;
      } 
    })
 
})

// updateTotal function
// function updateTotal(e){
// const total = e.target.parentNode.nextElementSibling.child[0]
// console.log(total)
// }

// increes item
const increes = document.querySelectorAll('.increes');
increes.forEach((e)=>{
  
    e.addEventListener("click", (d) => {
       
          d.target.previousElementSibling.innerHTML = count++
          var val = d.target.previousElementSibling.innerHTML;
           if (val >= 1) {
             val = 0;
              i.target.previousElementSibling.textContent = 0;
             decrees.style = `
             border:none;
              
             `;
           }
    })
 
})