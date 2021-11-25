// mobile-menu burger

const burger = document.querySelector('.burger');
const closeMenu = document.querySelector('.header__menu-close');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  menu.classList.add('header__menu_active');
});

closeMenu.addEventListener('click',  () => {
  menu.classList.remove('header__menu_active');
});

// page name to number

const pageName = document.location.pathname.split('/');

const pages = [
  'index.html',
  'catalog.html',
  'repair.html',
  'support.html',
  'catalog-card.html',
  'contacts.html  ',
];

const pageNumber = pages.indexOf(pageName[pageName.length - 1]);

// main slider

if (pageNumber < 4) {
  const mainPagination = document.querySelector('.main__pagination');
  mainPagination.innerHTML = `<div class="main__pagination-wrapper swiper-wrapper"></div>`;
  
  
    var MainPaginationSlider = new Swiper('.main__pagination', {
      direction: 'vertical',
      spaceBetween: 0,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      centeredSlidesBounds: true,    
    });
  
  
  var MainSlider = new Swiper('.main__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    initialSlide: pageNumber,
    thumbs: {
      swiper: MainPaginationSlider
    },
    on: {
      slideChange: false,
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      768: {
        autoplay: {
          delay: 600000,
        },
        direction: 'vertical',
      },
    },
  });  
  

  let number;
  let slides = [''];

  for (var i = 1; i < MainSlider.$wrapperEl[0].childElementCount + 1; i++) {

    number = i;
    if (number < 10) number = '0' + i;
    slides[i - 1] = document.createElement('div');
    slides[i - 1].innerHTML = `<span>` + number + `</span>`;
    slides[i - 1].classList.add('main__pagination-slide', 'swiper-slide', 'main__pagination_slide-' + i);

  };

 
  MainPaginationSlider.appendSlide(slides);
  const paginationInit = () => {
        var activeSlide = MainSlider.activeIndex;
        for (var i = 0; i < MainSlider.$wrapperEl[0].childElementCount; i++) {
          slides[i].classList.remove('main__pagination_slide-next', 'main__pagination_slide-active');
            if (activeSlide == i) slides[i].classList.add('main__pagination_slide-active');
            if (activeSlide == i - 1 || activeSlide == i + 1) slides[i].classList.add('main__pagination_slide-next');
        };
      };
  paginationInit();

  MainSlider.on('slideChange', function() { var activeSlide = MainSlider.activeIndex;
        for (var i = 0; i < MainSlider.$wrapperEl[0].childElementCount; i++) {
          slides[i].classList.remove('main__pagination_slide-next', 'main__pagination_slide-active');
            if (activeSlide == i) slides[i].classList.add('main__pagination_slide-active');
            if (activeSlide == i - 1 || activeSlide == i + 1) slides[i].classList.add('main__pagination_slide-next');
        }; });
  // MainSlider.slideChange();


};

// about button "read more"


  const aboutText = document.querySelector(".about__text");
  const aboutButton = document.querySelector(".about__description-button");


if (aboutButton != null) {
  aboutButton.addEventListener('click', ()=> {
    aboutText.classList.toggle('about__text_active');
  });
}

// repair slider preview

var SliderPreview = new Swiper('.slider-preview', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    1100: {
      spaceBetween: 30,
    },
    1000: {
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 10,
    },
    320: {
      spaceBetween: 10,
    },
  },
});

// repair slider
    
var Slider = new Swiper('.slider', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.slider__button_next',
    prevEl: '.slider__button_prev',
  },
  thumbs: {
    swiper: SliderPreview
  }
});
