import Swiper, {Navigation, Pagination, Autoplay, Scrollbar} from "swiper";

const sliderOrdinary = document.querySelector(".slider");
const sliderWithScrollbar = document.querySelector(".slide-beyond");

if (sliderOrdinary !== undefined || sliderWithScrollbar !== undefined) {
    const slider = new Swiper(".slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        modules: [Navigation, Pagination, Autoplay],
        pagination: {
            el: ".slider-pagination.swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".slider-button-next.swiper-button-next",
            prevEl: ".slider-button-prev.swiper-button-prev",
        },
        // mousewheel: {
        //     invert: true,
        // },
        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //         slidesPerView: 2,
        //         spaceBetween: 20
        //     },
        //     // when window width is >= 480px
        //     480: {
        //         slidesPerView: 3,
        //         spaceBetween: 30
        //     },
        //     // when window width is >= 640px
        //     640: {
        //         slidesPerView: 4,
        //         spaceBetween: 40
        //     }
        // }
    });
    const slideBeyond = new Swiper(".slide-beyond.swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        // Disable preloading of all images
        preloadImages: false,
        modules: [Scrollbar],
        scrollbar: {
            el: ".slide-beyond-scrollbar.swiper-scrollbar",
            // hide: true,
            draggable: true,
        },
        breakpoints: {
            250: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1300: {
                slidesPerView: 4,
            }
        },
    });
}
