


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ПРОКРУТКА, ШАПКА
// document.addEventListener('DOMContentLoaded', function () {
//     // СКРОЛЛ К НУЖНОЙ СЕКЦИИ ПО КЛИКУ НА ПУНКТАХ МЕНЮ
//     $('.menu__link').click(function () {
//         var scroll_elem = $(this).attr('href');
//         $('html, body').animate({
//             scrollTop: $(scroll_elem).offset().top
//         }, 1000);
//     });
//     // ДОБАВЛЯЕМ АКТИВНЫЙ КЛАСС ШАПКЕ
//     function headerActiveToggle() {
//         const scrollSize = window.pageYOffset
//         scrollSize > 1 ? header.classList.add('active') : header.classList.remove('active')
//     }
//     window.addEventListener('load', headerActiveToggle) // ПРИ ПЕРЕЗАГРУЗКЕ СТРАНИЦЫ ЕСЛИ СТРАНИЦА УЖЕ ПРОСКРОЛЛЕНА
//     window.addEventListener('scroll', headerActiveToggle) // ПРИ СКРОЛЛЕ
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
const tabs = () => {
    const runner = document.querySelector('.runner')
    const tabs = document.querySelectorAll('.js-tabBtn')
    const contents = document.querySelectorAll('.tabs__content')
    runner.style.width = tabs[0].offsetWidth + "px";
    runner.style.left = tabs[0].offsetLeft + "px";
    if (document.documentElement.clientWidth < 992) {
        runner.style.width = tabs[0].offsetWidth + "px";
        runner.style.height = tabs[0].offsetHeight + "px";
        runner.style.top = tabs[0].offsetTop + "px";
    }
    tabs[0].classList.add('is-active')

    contents.forEach(item => {
        item.classList.remove('is-active')
    })
    contents[0].classList.add('is-active')

    tabs.forEach((item, i) => {
        item.addEventListener('mouseover', function () {
            let itemWidth = this.offsetWidth
            let itemHeight = this.offsetHeight
            let itemLeft = this.offsetLeft
            let itemTop = this.offsetTop
            if(!item.classList.contains('is-active')){
                item.querySelector('.tabs__name').style.color = "#FFF"
                tabs.forEach(elem => {
                    if(elem.classList.contains('is-active')){
                        elem.querySelector('.tabs__name').style.color = "rgba(0,0,0,0.4)"
                    }
                })
            }
            runner.style.width = itemWidth + "px";
            runner.style.left = itemLeft + "px";
            if (document.documentElement.clientWidth < 992) {
                runner.style.width = itemWidth + "px";
                runner.style.height = itemHeight + "px";
                runner.style.top = itemTop + "px";
            }
        })
        item.addEventListener('mouseout', function () {
            if(!item.classList.contains('is-active')){
                item.querySelector('.tabs__name').style.color = "rgba(0,0,0,0.4)"
                tabs.forEach(elem => {
                    if(elem.classList.contains('is-active')){
                        elem.querySelector('.tabs__name').style.color = "#FFF"
                    }
                })
            }
            runner.style.width = document.querySelector('.tabs__button.is-active').offsetWidth + "px";
            runner.style.left = document.querySelector('.tabs__button.is-active').offsetLeft + "px";
            
        })
        item.addEventListener('click', function () {
            tabs.forEach(elem => {
                elem.classList.remove('is-active')
            })
            this.classList.add('is-active')
            contents.forEach(item => {
                item.classList.remove('is-active')
            })
            contents[i].classList.add('is-active')
        })
    })
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ МАСКА ДЛЯ ИНПУТОВ (https://github.com/RobinHerbots/Inputmask)
const inputMask = () => {
    $(".js-maskPhone").inputmask({
        mask: "+7 999 999 99 99",
        clearIncomplete: true
    });
    $('.email').inputmask({
        mask: "*{1,20}[.*{1,20}]@*{1,20}.*{2,4}",
        clearIncomplete: true
    //     greedy: false,
    //     onBeforePaste: function (pastedValue, opts) {
    //         pastedValue = pastedValue.toLowerCase();
    //         return pastedValue.replace("mailto:", "");
    //     },
    //     definitions: {
    //         '*': {
    //             validator: "[0-9A-Za-z-а-я-]",
    //             casing: "lower"
    //         }
    //     }
    });
    $(".js-maskDate").inputmask({
        mask: "99/99/9999",
        clearIncomplete: true,
        'placeholder': 'dd/mm/yyyy'
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ СЛАЙДЕР SWIPER (https://swiperjs.com/get-started) 
const sliders = () => {
    const swiper = new Swiper('.js-sliderCases', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            565: {
                slidesPerView: 2
            }
        }
    })
    const swiper2 = new Swiper('.js-sliderNews', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            992: {
                slidesPerView: 3
            },
            565: {
                slidesPerView: 2
            }
        }
    })
    const swiper3 = new Swiper('.js-sliderPartners', {
        loop: false,
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            992: {
                slidesPerView: 6
            },
            768: {
                slidesPerView: 4
            },
            565: {
                slidesPerView: 3
            }
        }
    })
    const swiper4 = new Swiper('.js-sliderReport', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            565: {
                slidesPerView: 2
            }
        }
    })
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const caseModal = () => {
    const modalFoto = document.querySelector('.modal-case__foto')
    const modalName = document.querySelector('.modal-case__name')
    const modalText = document.querySelector('.modal-case__text')
    const box = document.querySelector('.cases')
    function changeContent(k){
        const btn = k.target.classList.contains('js-toFullCase')
        const foto = k.target.closest('.slide').querySelector('.slide__foto')
        const name = k.target.closest('.slide').querySelector('.slide__name')
        const text = k.target.closest('.slide').querySelector('.slide__textfull')
        if(btn){
            modalFoto.src = foto.src
            modalName.innerHTML = name.innerHTML
            modalText.innerHTML = text.innerHTML
        }
    }
    box.addEventListener('click', function(e){
        changeContent(e)
    })
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ КАРТА, ОТЛОЖЕННАЯ ЗАГРУЗКА (ЧТОБЫ УЛУЧШИТЬ ПОКАЗАТЕЛИ - PageSpeed Insights)
const map = () => {

    setTimeout(function() {
        var headID = document.getElementsByTagName("body")[0];         
        var newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        headID.appendChild(newScript);
    }, 3000);
    setTimeout(function() {
            var myMap = new ymaps.Map("map", {
            center: [55.917879, 37.806326],
            zoom: 13,
            controls: ['smallMapDefaultSet']
        }, {
            searchControlProvider: 'yandex#search'
        });

        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point"
            },
        });
        myMap.geoObjects
            .add(myGeoObject)
            .add(new ymaps.Placemark([55.917879, 37.806326], {
                balloonContent: '<strong></strong>',
                iconCaption: 'М.О., г. Королев, ул. Ленина 12'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '200'
            }));

        myMap.setType('yandex#publicMap');

        myMap.behaviors.disable('scrollZoom');
        //на мобильных устройствах... (проверяем по userAgent браузера)
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //... отключаем перетаскивание карты
            myMap.behaviors.disable('drag');
        }
    }, 4000);

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
tabs()
inputMask()
sliders()
caseModal()


