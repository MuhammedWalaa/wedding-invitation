// August is month 7 because JavaScript months start from 0
const weddingDate = new Date(2026, 7, 15, 20, 0, 0).getTime();

const countdown = setInterval(function () {

 
const now = new Date().getTime();
const distance = weddingDate - now;

if (distance <= 0) {
    clearInterval(countdown);

    document.querySelector(".countdown").innerHTML =
        "<h3>Today is our wedding day! ❤️</h3>";

    return;
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
);

const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
);

const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
);

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;
 

}, 1000);
