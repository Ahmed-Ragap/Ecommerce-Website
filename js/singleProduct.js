  const main_prodcut_image = document.getElementById('main_product_image');
function changeImage(element) {
    main_prodcut_image.src = element.src;

}

main_prodcut_image.addEventListener('onMouseenter' , () => {
     $('.zoom').magnify({
        speed: 500,
        src: '../imgs/home_new-arrival/pr15.jpg'
     });
   
 })



$(document).ready(function() {
    $('.zoom').magnify();
  });