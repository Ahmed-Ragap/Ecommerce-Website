// page loading 
$(window).on('load', function () {
  $('.loading_container').hide();
}) 
// scroll to top button
let scrollToTop = document.querySelector(".scroll_to_top");
window.onscroll = function(){
  const scroll = window.scrollY > 400 ? scrollToTop.style.opacity= '1':   scrollToTop.style.opacity= '0';

}  


document.addEventListener("DOMContentLoaded", function(){
 //Prevent closing from click inside dropdown
     document.querySelectorAll('.dropdown-menu').forEach(function(element){
       element.addEventListener('click', function (e) {
         e.stopPropagation();
       });
     });
  
      // make it as accordion for smaller screens
     if (window.innerWidth > 992) {
       // close all inner dropdowns when parent is closed
       document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
         everydropdown.addEventListener('hidden.bs.dropdown', function () {
           // after dropdown is hidden, then find all submenus
             this.querySelectorAll('.megasubmenu').forEach(function(everysubmenu){
               // hide every submenu as well
              everysubmenu.style.display = 'none';
             });
         })
       });
   
       document.querySelectorAll('.has-submenu a').forEach(function(element){
         element.addEventListener('click', function (e) {
             let nextEl = this.nextElementSibling;
             if(nextEl && nextEl.classList.contains('megasubmenu_custom_js')) {	
               // prevent opening link if link needs to open dropdown
               e.preventDefault();
               if(nextEl.style.display == 'block'){
                 nextEl.style.display = 'none';
               } else {
                 nextEl.style.display = 'block';
               }
             }
         });
       }) // end foreach
     }
     // end if innerWidth
   }); 
   // DOMContentLoaded  end
   
   // swiper 
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
     autoplay:true, 
    loop: true, 
    speed: 500, 
    coverflowEffect: {
      rotate: 35,  
      stretch: 0,
      depth: 40, 
      scale:1,
      
      spaceBetween: 10,
      modifier: 1,
      slideShadows: true,
    },
 
  });
  //start owl-carousel (slider custom style)
   $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
       autoplayHoverPause:true,
      lazyLoad:true,
         mobileFirst:true,
          infinite: true,
          autoplay:true,
         loop:true,
       mouseWel:true,
       nav:true,
       margin:10,
       responsiveClass:true,
       autoplaySpeed: 1200,
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       navSpeed:1500,

      responsive:{
        0:{
            items:1,
            loop:true
        },
        992:{
            items:2,
            loop:true
        },
        1200:{
            items:3,
            loop:true
        }
    }
    });
    
  });
    //start team_member (slider custom style)
    $(document).ready(function(){
      $('.team_slide').owlCarousel({
        autoplayHoverPause:true,
        lazyLoad:true,
           mobileFirst:true,
            infinite: true,
            dots:true,
            autoplay:true,
           loop:true,
         mouseWel:true,
         navigation : false,
         nav:false,
         margin:10,
         responsiveClass:true,
         autoplaySpeed: 1200,
         animateOut: 'fadeOut',
         animateIn: 'fadeIn',
         navSpeed:1500,
        
        responsive:{
          0:{
              items:1,
              loop:true
          },
          992:{
              items:2,
              loop:true
          },
          1200:{
              items:3,
              loop:true
          }
      }
      });
      
    });
    //start team_member (slider custom style)
    $(document).ready(function(){
      $('.suggested_product').owlCarousel({
        autoplayHoverPause:true,
        lazyLoad:true,
           mobileFirst:true,
            infinite: true,
            dots:false,
            autoplay:true,
           loop:true,
         mouseWel:true,
         navigation : false,
         nav:false,
         margin:10,
         responsiveClass:true,
         autoplaySpeed: 1200,
         animateOut: 'fadeOut',
         animateIn: 'fadeIn',
         navSpeed:1500,
         centeredSlides: true,
      // responsive 
        responsive:{
          0:{
              items:1,
              loop:true 
          },
          425:{
            items:2,
            loop:true
        },
          575:{
            items:3,
            loop:true
        },
        767:{
          items:4,
          loop:true
      },

  
          992:{
              items:5,
              loop:true
          },
          1200:{
              items:7, 
              loop:true
          },
          1400:{
            items:8, 
            loop:true
        }
      }
      });
      
    });
 



  //  start AOS Animation----------------
  AOS.init();


  // 
  const arrowDown = document.querySelector('.down_show');
  const showHidden = document.querySelector('.hidden_');
// console.log(arrowDown)
// console.log(showHidden)
//   arrowDown.addEventListener('onmouseenter', () => {
//     showHidden.style.display = 'block';
//     console.log(arrowDown)
// console.log(showHidden)
//   })downHide
 function downShow(){
  showHidden.style.visibility = 'visible';
 }
 function downHide(){
  showHidden.style.visibility = 'hidden';
 }
  /* --------------------------
 * GLOBAL VARS
 * -------------------------- */
// The date you want to count down to
var targetDate = new Date("2022/12/3 00:00:00");   

// Other date related variables
var days;
var hrs;
var min;
var sec;

/* --------------------------
 * ON DOCUMENT LOAD
 * -------------------------- */
$(function() {
   // Calculate time until launch date
   timeToLaunch();
  // Transition the current countdown from 0 
  numberTransition('#days .number', days, 1000, 'easeOutQuad');
  numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
  numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
  numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
  // Begin Countdown
  setTimeout(countDownTimer,1001);
});

/* --------------------------
 * FIGURE OUT THE AMOUNT OF 
   TIME LEFT BEFORE LAUNCH
 * -------------------------- */
function timeToLaunch(){
    // Get the current date
    var currentDate = new Date();

    // Find the difference between dates
    var diff = (currentDate - targetDate)/1000;
    var diff = Math.abs(Math.floor(diff));  

    // Check number of days until target
    days = Math.floor(diff/(24*60*60));
    sec = diff - days * 24*60*60;

    // Check number of hours until target
    hrs = Math.floor(sec/(60*60));
    sec = sec - hrs * 60*60;

    // Check number of minutes until target
    min = Math.floor(sec/(60));
    sec = sec - min * 60;
}

/* --------------------------
 * DISPLAY THE CURRENT 
   COUNT TO LAUNCH
 * -------------------------- */
function countDownTimer(){ 
    
    // Figure out the time to launch
    timeToLaunch();
    
    // Write to countdown component
    $( "#days .number" ).text(days);
    $( "#hours .number" ).text(hrs);
    $( "#minutes .number" ).text(min);
    $( "#seconds .number" ).text(sec);
    
    // Repeat the check every second
    setTimeout(countDownTimer,1000);
}

/* --------------------------
 * TRANSITION NUMBERS FROM 0
   TO CURRENT TIME UNTIL LAUNCH
 * -------------------------- */
function numberTransition(id, endPoint, transitionDuration, transitionEase){
  // Transition numbers from 0 to the final number
  $({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
      duration: transitionDuration,
      easing:transitionEase,
      step: function() {
        $(id).text(Math.floor(this.numberCount));
      },
      complete: function() {
        $(id).text(this.numberCount);
      }
   }); 
};
// --------------------------
// start all product page 
var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');
document.querySelector('#one').value=lowerSlider.value;
document.querySelector('#two').value=upperSlider.value;
// console.log(lowerSlider.value)
var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
};