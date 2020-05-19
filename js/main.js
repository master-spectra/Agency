AOS.init();

$('.page .service-section .content').slick({
  dots:true,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite:true,
  autoplay: true,
  autoplaySpeed: 2000
})

$('.page .slider .content-slider').slick({
  arrows:false,
  dots:true,
  infinite:true,
  autoplay: true,   
})

$('.page .works-list .wrapper .content').slick({
    dots:true,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:true,
    autoplay: true,
    autoplaySpeed: 2000
});
