const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
});

AOS.init();

// Swiper

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // ჩაშენებული responsive
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

// Date difference

let daysNum = document.querySelector(".dayDif");
let hoursNum = document.querySelector(".hourDif");
let minutesNum = document.querySelector(".minutDif");
let secondsNum = document.querySelector(".secondDif");
// saboloo ricxvi

// vigeb mocanemebs

const end = new Date();
end.setHours(end.getHours() + 24);

const interval = setInterval(() => {
  const now = new Date();
  const timeRemaining = end - now;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  daysNum.textContent = days;
  hoursNum.textContent = hours;
  minutesNum.textContent = minutes;
  secondsNum.textContent = seconds;
}, 1000);
