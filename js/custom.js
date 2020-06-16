// Toggle nav slide
$('.nav-slide').slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  prevArrow: '<span class="prev-arrow"><i class="fas fa-sort-up"></i></span>',
  nextArrow: '<span class="next-arrow"><i class="fas fa-sort-up"></i></span>',
});

// slide on scroll
const slider = $(".nav-slide");
slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }
}));

// arrow show on active nav
$(".control-btn button").click(function(){
  $(".right-nav").toggleClass("active");
  $(".left-nav").toggleClass("active");
  $(".right-nav").toggleClass("shadow");
  $(".left-nav").toggleClass("shadow");
  $(".left-col").toggleClass("order-lg-3");
  $(".left-col").toggleClass("order-lg-1");
  $(".right-col").toggleClass("order-lg-1");
  $(".right-col").toggleClass("order-lg-3");
});

// table icon show/hide 
$(".dots-btn").click(function(){
  $(".hide-icon").toggleClass("d-none");
});





// // Variables
// const btn = document.querySelectorAll('.dots-btn');

// // btn.addEventListener('click',(x)=>{
// //   x.classList.toggle("hide-icon");
// // })

// btn.forEach((x)=>{
//   x.addEventListener('click',()=>{
//     // x.classList.toggle("hide-icon");
//   });
// })
// const btn = document.querySelectorAll('.dots-btn');

// btn.forEach((x)=>{
    
//   x.addEventListener('click',()=>{
//     const hide = document.getElementsByClassName('hide-icon');
//   });
    
// });
