$(".puppies-slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<img class="left" src="dist/images/Path.png" >',
  nextArrow: '<img class="right" src="dist/images/Path.png" >',
  autoplay: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    }
  ]
});

$(".gif-images").slick({
  dots: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: false,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        autoplay: true
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        autoplay: true
      }
    }
  ]
});
