
window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop: true, // Permite sliderului să reînceapă de la primul slide după ultimul slide
  centeredSlides: true, // Centrează slide-ul activ
  autoplay: {
    delay: 9500, // Intervalul de timp (în milisecunde) între schimbarea automată a slide-urilor
    disableOnInteraction: false, // Permite continuarea autoplay-ului chiar și după interacțiunea utilizatorului
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // Afișează un slide per vizualizare pe ecrane mici
    },
    768: {
      slidesPerView: 2, // Afișează două slide-uri per vizualizare pe ecrane medii
    },
    1024: {
      slidesPerView: 3, // Afișează trei slide-uri per vizualizare pe ecrane mari
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10, // Distanța între slide-uri
  loop: true, // Permite sliderului să reînceapă de la primul slide după ultimul slide
  centeredSlides: true, // Centrează slide-ul activ
  autoplay: {
    delay: 9500, // Intervalul de timp (în milisecunde) între schimbarea automată a slide-urilor
    disableOnInteraction: false, // Permite continuarea autoplay-ului chiar și după interacțiunea utilizatorului
  },
  navigation: {
    nextEl: ".swiper-button-next", // Butonul pentru a naviga la slide-ul următor
    prevEl: ".swiper-button-prev", // Butonul pentru a naviga la slide-ul anterior
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // Afișează un slide per vizualizare pe ecrane mici
    },
    450: {
      slidesPerView: 2, // Afișează două slide-uri per vizualizare pe ecrane medii
    },
    768: {
      slidesPerView: 3, // Afișează trei slide-uri per vizualizare pe ecrane mai mari
    },
    1024: {
      slidesPerView: 4, // Afișează patru slide-uri per vizualizare pe ecrane mari
    },
  },
});


var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
