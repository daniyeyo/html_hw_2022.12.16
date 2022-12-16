$(function () {
    $('button').on('click', function () {
        $('h1').toggleClass('on')
    });


    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        trueauopSpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_pro_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        slidesToShow: 2,
    })

    $('.mainProduct .arrows .prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    })

    $('.mainProduct .arrows .next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    })

})
