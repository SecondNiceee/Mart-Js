const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
        nextEl: '.reviews__btn-next',
        prevEl: '.reviews__btn-prev',
    },

    breakpoints: {
        319: {
            spaceBetween: 24,
            slidesPerView: 1,
        },

        1025: {
            spaceBetween: 24,
            slidesPerView: 2,
        },
    },

    pagination: {
        el: '.reviews__pagination',
        type: 'bullets',
    },

})


var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99")
im.mask(selector);
new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
        mail: {
            required: true,
            email: true
        },
    },
});