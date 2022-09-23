$(document).ready(function(){
    $('.products').slick({
        slidesToShow: 4,
        slidesToScroll:1,
        arrows:true,
        infinite:true,
        dots:false,
        
        autoplay:true,
        autoplaySpeed:1000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
          {
            
            breakpoint: 1919,
            settings: {
              
              slidesToShow: 4,
              dots:true,
              arrows:false,
              
            }
            
          },
          {
            
            breakpoint: 1200,
            settings: {
              
              slidesToShow: 2,
              dots:true,
              arrows:false,
              
            }
            
          },
          {
            
            breakpoint: 769,
            settings: {
              
              slidesToShow: 2,
              dots:true,
              arrows:false,
              
            }
            
          },
          {
            
            breakpoint: 579,
            settings: {
              
              slidesToShow: 1,
              dots:true,
              arrows:false,
              
            }
            
          },
          {
            
            breakpoint: 481,
            settings: {
              
              slidesToShow: 1,
              dots:true,
              arrows:false,
              
            }
            
          },
        ]
      });
 })