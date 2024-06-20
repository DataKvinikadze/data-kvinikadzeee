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

  slidesPerView: 3,
});

// Date difference

let days = document.querySelector(".dayDif");
let hours = document.querySelector(".hourDif");
let minutes = document.querySelector(".minutDif");
let seconds = document.querySelector(".secondDif");
// saboloo ricxvi

let endDate = new Date("2024-06-30 23:59:59");
// vigeb mocanemebs
let EndMonth = endDate.getMonth() + 1;
let endHours = endDate.getHours();
let endMinutes = endDate.getMinutes();
let endSeconds = endDate.getSeconds();
let endDayOfMonth = endDate.getDate();

setInterval(() => {
  // axlandeli ricxvi
  let currentTime = new Date();

  // vigeb mocanemebs
  let currentMonth = currentTime.getMonth() + 1;
  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  let currentDayOfMonth = currentTime.getDate();

  // gansxvavebebs vigeb
  let differenceInDay = endDayOfMonth - currentDayOfMonth;
  days.textContent = differenceInDay;
  let differenceInHours = endHours - currentHours;
  hours.textContent = differenceInHours;
  let differenceInMinutes = endMinutes - currentMinutes;
  minutes.textContent = differenceInMinutes;
  let differenceInSeconds = endSeconds - currentSeconds;
  seconds.textContent = differenceInSeconds;
  let differenceInMonths = EndMonth - currentMonth;
  // aq tu tveebshi moxda cvlileba differenceInDays emateba gasuli tvis dgeebis raodenoba
  if (differenceInMonths > 0) {
    differenceInDay = differenceInDay + 30 * differenceInMonths;
  }
}, 1000);
