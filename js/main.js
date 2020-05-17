$(function () {
    $('.header__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.png" alt="">',
        dots: true,
        responsive: [
            {
              breakpoint: 410,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
          ]
    });

    $('.our__clients').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.png" alt="">',
        dots: true
    });

    $('.comments__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.png" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.png" alt="">',
        dots: true
    });

    new WOW().init();
    
    $('.menu-btn').on('click', function() {
        $('.fullscr-menu').slideDown();
    })
    $('.menu-close').on('click', function() {
        $('.fullscr-menu').slideUp();
    })


})