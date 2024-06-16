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

// saboloo ricxvi

let endDate = new Date("2024-06-30 23:59:59");

// vigeb mocanemebs
let EndMonth = endDate.getMonth() + 1;
let endHours = endDate.getHours();
let endMinutes = endDate.getMinutes();
let endSeconds = endDate.getSeconds();
let endDayOfMonth = endDate.getDate();

// axlandeli ricxvi
let currentTime = new Date();

// vigeb mocanemebs
let currentMonth = currentTime.getMonth() + 1;
let currentHours = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();
let currentSeconds = currentTime.getSeconds();
let currentDayOfMonth = currentTime.getDate();

// vaconsoleb
console.log(
  `Current Time: ${currentDayOfMonth} ${currentHours}:${currentMinutes}:${currentSeconds}`
);
console.log(
  `end Time: ${endDayOfMonth} ${endHours}:${endMinutes}:${endSeconds}`
);

// gansxvavebebs vigeb
let differenceInDay = endDayOfMonth - currentDayOfMonth;
console.log(differenceInDay);
let differenceInHours = endHours - currentHours;
console.log(differenceInHours);
let differenceInMinutes = endMinutes - currentMinutes;
console.log(differenceInMinutes);
let differenceInSeconds = endSeconds - currentSeconds;
console.log(differenceInSeconds);
let differenceInMonths = EndMonth - currentMonth;
console.log(differenceInMonths);

// aq tu tveebshi moxda cvlileba differenceInDays emateba gasuli tvis dgeebis raodenoba
if (differenceInMonths > 0) {
  differenceInDay = differenceInDay + 30 * differenceInMonths;
}
