
// document.addEventListener("DOMContentLoaded", () => {
  let items = document.querySelectorAll(".cartItem");
  
  items.forEach((item) => {
  runTot()
    let removeBtn = document.querySelector(".removeBtn");
    // handel remove btn
    removeBtn.addEventListener("click" , (e) => {
      e.target.parentNode.parentElement.closest('.cartItem').remove();
    })
  
    // decrees quantity
    item.querySelector(".decrees").addEventListener("click", () => {
    
    if(item.querySelector(".inpAmount").innerHTML > 0){
      item.querySelector(".inpAmount").innerHTML--;
      //run total price for single product
      item.querySelector(".total").innerHTML = 
    item.querySelector(".inpAmount").innerHTML * item.querySelector(".price").innerHTML + " egp";
  //run min total for all product 
    document.querySelector("#supTotla").innerHTML = 
    Number(document.querySelector("#supTotla").innerHTML) -
    Number(item.querySelector(".price").innerHTML);

//show and hide button 
    Number(document.querySelector("#supTotla").innerHTML) > 0 ? (document.querySelector("#getOrder").style.display = "block") : (document.querySelector("#getOrder").style.display = "none");
     runTot()
    }
    })
  })

 //run fixed value to sup and main total
function runTot(){
    //  let supTotla = document.querySelector("#supTotla").innerHTML;
     let allPrices = document.querySelectorAll('.total');
    //  let shippingPrice = document.querySelector('#shipping').innerHTML
     let tot = 0 ;
     allPrices.forEach((allPrice) => {
     tot = tot + parseFloat(allPrice.innerHTML) ;
     })
     document.querySelector('#supTotla').innerHTML = tot.toFixed(2); 
   document.querySelector('#totalPrice').innerHTML = tot 
}
//end runTot




// }
// )





// let n = 4.4545600
// alert(n.toFixed(2))











// remove cart item
// const removeCartBtn = document.querySelectorAll('.removeBtn');
// removeCartBtn.forEach((ele) =>{
// ele.addEventListener("click", (e) => {
//     e.preventDefault()
//     e.target.parentNode.parentElement.closest('.cartItem').remove();
//   })
// })



// updateTotal function
// function updateTotal(e){
// const total = e.target.parentNode.nextElementSibling.child[0]
// console.log(total)
// }

// increes item
// const increes = document.querySelectorAll('.increes');
// increes.forEach((e)=>{
  
//     e.addEventListener("click", (d) => {
       
//           d.target.previousElementSibling.innerHTML = count++
//           var val = d.target.previousElementSibling.innerHTML;
//            if (val >= 1) {
//              val = 0;
//               i.target.previousElementSibling.textContent = 0;
//              decrees.style = `
//              border:none;
              
//              `;
//            }
//     })
 
// })