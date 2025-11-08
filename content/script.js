function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clock = document.getElementById('current-time');
    clock.innerHTML = `${hours}:${minutes}<sup class="seconds">${seconds}</sup>`;
}

function updateBackground() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const minuteOfDay = h * 60 + m;

    // minuty dnia
    const A_start = 10 * 60;      // 10:00 => 600
    const A_end   = 18 * 60 - 1;  // do 17:59 => 1079
    const C_minute = 21 * 60 + 37; // 21:37 => 1297

    let imgPath = './content/images/background-B.webp'; // domyślnie B

    if (minuteOfDay >= A_start && minuteOfDay <= A_end) {
        imgPath = './content/images/background-A.webp';
    } else if (minuteOfDay === C_minute) {
        imgPath = './content/images/background-C.webp';
    } else {
        imgPath = './content/images/background-B.webp';
    }

    // zmień src obrazka zamiast background-image
    const timeImageEl = document.getElementById('timeimg');
    if (timeImageEl) {
        timeImageEl.src = imgPath;
    } else {
        console.warn('Element with id "timeimg" not found.');
    }
}

// aktualizacje co sekundę (żeby złapać zmianę o 21:37)
setInterval(updateClock, 1000);
updateClock();

setInterval(updateBackground, 1000);
updateBackground();

function updateWorkdayWidth() {
  const left = document.getElementById('left');
  const middle = document.getElementById('middle');
  const right = document.getElementById('right');
  const workday = document.getElementById('workday');

  if (left && middle && right && workday) {
    const totalWidth =
      left.offsetWidth + middle.offsetWidth + right.offsetWidth + 40; // gap między nimi
    workday.style.width = totalWidth + 'px';
  }
}

window.addEventListener('load', updateWorkdayWidth);
window.addEventListener('resize', updateWorkdayWidth);