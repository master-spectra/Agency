$('.page .service-section .content').slick({
    dots:true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite:true,
    autoplay: true,
    autoplaySpeed: 2000
})
ScrollOut({
    onShown: function(el) {
      // use the web animation API
      el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    },
    onHidden: function(el) {
      // hide the element initially
      el.style.opacity = 0;
    }
  });