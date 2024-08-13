// starrating

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
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl: ".btnnext",
        prevEl: ".btnprev",
    },
    breakpoints:{
        200:{
            slidesPerView: 1,
        },
        700:{
            slidesPerView: 2,
        }
    }
});

var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl: ".btnnext1",
        prevEl: ".btnprev1",
    },
    breakpoints:{
        200:{
            slidesPerView: 1,
        },
        700:{
            slidesPerView: 2,
        }
    }
});


var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl: ".btnprev2",
        prevEl: ".btnnext2",
    },
    breakpoints:{
        200:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        700:{
            slidesPerView:4,
        }
    }
});