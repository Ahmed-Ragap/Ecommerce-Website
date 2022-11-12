
document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".cartItem");
  items.forEach((item) => {
  runTot()
    let removeBtn = document.querySelector(".removeBtn");
    // handel remove btn
    item.querySelector(".removeBtn").addEventListener("click" , (e) => {
      e.target.parentNode.parentElement.closest('.cartItem').remove();
    })
  
    // decrees quantity
    item.querySelector(".decrees").addEventListener("click", () => {
    if(item.querySelector(".inpAmount").innerHTML > 0){
      item.querySelector(".inpAmount").innerHTML--;
      //run total price for single product
      item.querySelector(".total").innerHTML = 
    item.querySelector(".inpAmount").innerHTML * item.querySelector(".price").innerHTML ;
  //run min total for all product 
    document.querySelector("#supTotla").innerHTML = 
    Number(document.querySelector("#supTotla").innerHTML) -
    Number(item.querySelector(".price").innerHTML);
     runTot()
    } else{
      alert('no item added')
    }
    })

     //start increase function 
    // item.querySelector(".increase").addEventListener("click", () => {
    //   alert('ok')
    //   item.querySelector(".inpAmount").innerHTML++;
    //   item.querySelector(".total").innerHTML = item.querySelector(".inpAmount").innerHTML * item.querySelector(".price").innerHTML + " egp";
    //   document.querySelector("#supTotla").innerHTML = 
    //   Number(document.querySelector("#supTotla").innerHTML) +
    //   Number(item.querySelector(".price").innerHTML);
     
    //   runTot()
    // });

  })

 //run fixed value to sup and main total
function runTot(){
     let allPrices = document.querySelectorAll('.total'); 
     let shippingPrice = document.querySelector('#shipping');
     let tot = 0 ;
     allPrices.forEach((allPrice) => {
     tot = tot + parseFloat(allPrice.innerHTML) ;
     })
     document.querySelector('#supTotla').innerHTML = tot.toFixed(2) + ' EGP';
   if(tot < 1){
    document.querySelector('#totalPrice').innerHTML = tot
    document.querySelector("#getOrder").style.display = "none"
   } else {
    document.querySelector('#totalPrice').innerHTML = tot + parseFloat(shippingPrice.innerHTML )+ ' EGP';
    document.querySelector("#getOrder").style.display = "block"
   }
}
//end runTot
})