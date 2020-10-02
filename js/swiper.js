//3D ANIMATION
//ONE 
var galleryThumbs1 = new Swiper('.gallery-thumbs1', {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
});

var galleryTop1 = new Swiper('.gallery-top1', {
    spaceBetween: 800,
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    thumbs: {
        swiper: galleryThumbs1,
    },
});

//TWO
var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
});

var galleryTop2 = new Swiper('.gallery-top2', {
    spaceBetween: 800,
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    thumbs: {
        swiper: galleryThumbs2,
    },
});

//THREE
var galleryThumbs3 = new Swiper('.gallery-thumbs3', {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
});

var galleryTop3 = new Swiper('.gallery-top3', {
    spaceBetween: 800,
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    thumbs: {
        swiper: galleryThumbs3,
    },
});

//FOUR
var galleryThumbs4 = new Swiper('.gallery-thumbs4', {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
});

var galleryTop4 = new Swiper('.gallery-top4', {
    spaceBetween: 800,
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    thumbs: {
        swiper: galleryThumbs4,
    },
});

//GAME DESIGN
//FIVE
var galleryThumbs5 = new Swiper('.gallery-thumbs5', {
    spaceBetween: 30,
    slidesPerView: 2,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 1150px
        1150:{
            spaceBetween: 90,
            slidesPerView: 6,
        },
        // when window width is <= 800px
        800:{
            slidesPerView: 6,
        },
        // when window width is <= 600px
        600:{
            slidesPerView: 4,
        },
        // when window width is <= 500px
        500:{
            slidesPerView: 3,
        }
    }
});

var galleryTop5 = new Swiper('.gallery-top5', {
    spaceBetween: 800,
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    thumbs: {
        swiper: galleryThumbs5,
    },
});

//SIX
var galleryThumbs6 = new Swiper('.gallery-thumbs6', {
    spaceBetween: 30,
    slidesPerView: 2,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 800px
        800:{
            spaceBetween: 90,
            slidesPerView: 6,
        },
        // when window width is <= 600px
        600:{
            slidesPerView: 4,
        },
        // when window width is <= 500px
        500:{
            slidesPerView: 3,
        }
    }
});

var galleryTop6 = new Swiper('.gallery-top6', {
    spaceBetween: 800,
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    thumbs: {
        swiper: galleryThumbs6,
    },
});