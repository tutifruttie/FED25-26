const carNum = document.querySelector(".main section:nth-of-type(2) div p")
const arrowLeft = document.querySelector(".main section:nth-of-type(2) div img:first-of-type")
const arrowRight = document.querySelector(".main section:nth-of-type(2) div img:last-of-type")


arrowLeft.onclick = carLeft
arrowRight.onclick = carRight

let curCar = 1

function carLeft() {
    if (curCar > 1) {
        curCar--
        carNum.textContent = "0" + curCar + "/04"
    }
}

function carRight() {
    if (curCar < 4) {
        curCar++
        carNum.textContent = "0" + curCar + "/04"
    }
}

const langBtn = document.querySelector("header button:first-of-type");
langBtn.addEventListener("click", () => {
  if (langBtn.textContent.includes("EN-US")) {
    langBtn.textContent = "NL";
    langBtn.setAttribute("aria-label", "Verander taal naar Nederlands");
  } else {
    langBtn.textContent = "EN-US";
    langBtn.setAttribute("aria-label", "Change language to English (US)");
  } // https://www.w3schools.com/jsref/met_element_setattribute.asp
});
  
const menuBtn = document.querySelector("header button:last-of-type");
const menu = document.querySelector(".menu");
const closeMenuBtn = document.querySelector(".close-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("show");
});

