// let img=document.getElementsByClassName("img-1")
// let img2=document.getElementsByClassName("img-2")
// let btn=document.getElementsByClassName("btn-1")
// let btn2=document.getElementsByClassName("btn-2")

// btn.addEventListener("click",function(){
//     img.style.translate=""
    
// })

// const mainDiv=document.querySelectorAll(".main_div")
// console.log(mainDiv)

// const i=1;
//   const translateValue=100
//     const handleImageSlider = () => {
        
//                 mainDiv.forEach((div) => {
                    
//                             div.style.transform += `translateX(-100%)`;
//         });
            
      
//     };


document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('#carousel-1');
  const carouselInner = carousel.querySelector('.carousel-inners');
  const slides = carouselInner.querySelectorAll('.slides');


    const prevBtn = document.querySelector('.carousel-btn--prevs');
    const nextBtn = document.querySelector('.carousel-btn--nexts');

    let currentIndex = 0;
    const totalslides = slides.length;
    const slidesVisible = 2;

    const updateCarousel = () => {
        const offset = -currentIndex * (100 / slidesVisible);
        carouselInner.style.transform = `translateX(${offset}%)`;
    };

    const moveToNextslide = () => {
        if (currentIndex < totalslides - slidesVisible) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    };

    const moveToPrevslide = () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalslides - slidesVisible;
        }
        updateCarousel();
    };
    nextBtn.addEventListener('click', moveToNextslide);
    prevBtn.addEventListener('click', moveToPrevslide);

    updateCarousel();
   
    
});

// women_silder
document.addEventListener('DOMContentLoaded', function () {
  const carousel2 = document.querySelector('#carousel-2');
  const carouselInner2 = carousel2.querySelector('.carousel-inners');
  const slides2 = carouselInner2.querySelectorAll('.slides');

  const prevBtn2 = document.querySelector('.carousel-btn--prevs2');
  const nextBtn2 = document.querySelector('.carousel-btn--nexts2');
  
  let currentIndex2 = 2;
  const totalslides2 = slides2.length;
  const slidesVisible2 = 2;

  const updateCarousel2 = () => {
      const offset2 = -currentIndex2 * (100 / slidesVisible2);
      carouselInner2.style.transform = `translateX(${offset2}%)`;
  };

  const moveToNextslide2 = () => {
      if (currentIndex2 < totalslides2 - slidesVisible2) {
          currentIndex2++;
      } else {
          currentIndex2 = 0;
      }
      updateCarousel2();
  };

  const moveToPrevslide2 = () => {
      if (currentIndex2 > 0) {
          currentIndex2--;
      } else {
          currentIndex2 = totalslides2 - slidesVisible2;
      }
      updateCarousel2();
  };

  nextBtn2.addEventListener('click', moveToNextslide2);
  prevBtn2.addEventListener('click', moveToPrevslide2);

  updateCarousel2();
});


      const stars = document.querySelectorAll('.rating span');
      const ratingValue = document.getElementById('rating-value');
      let currentRating = 0;

      stars.forEach(star => {
        star.addEventListener('click', () => {
          currentRating = star.getAttribute('data-value');
          updateRating(currentRating);
        });

        star.addEventListener('mouseover', () => {
          highlightRating(star.getAttribute('data-value'));
        });

        star.addEventListener('mouseout', () => {
          highlightRating(currentRating);
        });
      });

      function updateRating(rating) {
        stars.forEach(star => {
          if (star.getAttribute('data-value') <= rating) {
            star.classList.add('filled');
          } else {
            star.classList.remove('filled');
          }
        });
        ratingValue.textContent = `You rated this ${rating} star(s)`;
      }

      function highlightRating(rating) {
        stars.forEach(star => {
          if (star.getAttribute('data-value') <= rating) {
            star.classList.add('highlight');
          } else {
            star.classList.remove('highlight');
          }
        });
     }

     //----------------------------------//

      var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".carousel-btn--nexts3",
    prevEl: ".carousel-btn--prevs3",
  },
 
  breakpoints:{
    300:{
      slidesPerView: 1,
    },
    700:{
      slidesPerView: 4,
    }

  }
});

  
    




     //---------------------------------------//