window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel-lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".carousel-indicador",
    arrows: {
      prev: ".corousel-izq",
      next: ".corousel-der",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 750,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 3000
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 3000
        }
      }
    ]
  
  });
});
