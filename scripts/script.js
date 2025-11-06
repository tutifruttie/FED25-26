// === CAROUSEL (only on index.html) ===
const carNum = document.querySelector(".main section:nth-of-type(2) div p");
const arrowLeft = document.querySelector(".main section:nth-of-type(2) div img:first-of-type");
const arrowRight = document.querySelector(".main section:nth-of-type(2) div img:last-of-type");

let curCar = 1;

function carLeft() {
  if (curCar > 1) {
    curCar--;
    carNum.textContent = "0" + curCar + "/04";
  }
}

function carRight() {
  if (curCar < 4) {
    curCar++;
    carNum.textContent = "0" + curCar + "/04";
  }
}

const langBtn = document.querySelector("header button:first-of-type");

if (langBtn) {
  langBtn.addEventListener("click", () => {
    if (langBtn.textContent.includes("EN-US")) {
      langBtn.textContent = "NL";
      langBtn.setAttribute("aria-label", "Verander taal naar Nederlands");
    } else {
      langBtn.textContent = "EN-US";
      langBtn.setAttribute("aria-label", "Change language to English (US)");
    }
  });
}

const menuBtn = document.querySelector("header button:last-of-type");
const closeBtn = document.querySelector(".close-menu");
const navMenu = document.querySelector("nav.menu");

if (menuBtn && closeBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
}
