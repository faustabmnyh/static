const batasDiskon1 = new Date("January 27, 2021 17:00:00").getTime();
const batasDiskon2 = new Date("December 27, 2020 17:00:00").getTime();
const batasDiskon3 = new Date("May 14, 2021 17:00:00").getTime();

const hitungMundur = setInterval(() => {
  const waktuSekarang = new Date().getTime();
  const selisih1 = batasDiskon1 - waktuSekarang;
  const selisih2 = batasDiskon2 - waktuSekarang;
  const selisih3 = batasDiskon3 - waktuSekarang;
  const hari1 = Math.floor(selisih1 / (1000 * 60 * 60 * 24));
  const hari2 = Math.floor(selisih2 / (1000 * 60 * 60 * 24));
  const hari3 = Math.floor(selisih3 / (1000 * 60 * 60 * 24));
  const jam1 = Math.floor(
    (selisih1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const jam2 = Math.floor(
    (selisih2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const jam3 = Math.floor(
    (selisih3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const menit1 = Math.floor((selisih1 % (1000 * 60 * 60)) / (1000 * 60));
  const menit2 = Math.floor((selisih2 % (1000 * 60 * 60)) / (1000 * 60));
  const menit3 = Math.floor((selisih3 % (1000 * 60 * 60)) / (1000 * 60));
  const detik1 = Math.floor((selisih1 % (1000 * 60)) / 1000);
  const detik2 = Math.floor((selisih2 % (1000 * 60)) / 1000);
  const detik3 = Math.floor((selisih3 % (1000 * 60)) / 1000);

  const timerDate = document.querySelectorAll(".timer__date");
  timerDate[0].innerHTML = `${hari1} :  ${jam1} : ${menit1} : ${detik1}`;
  timerDate[1].innerHTML = `${hari2} :  ${jam2} : ${menit2} : ${detik2}`;
  timerDate[2].innerHTML = `${hari3} :  ${jam3} : ${menit3} : ${detik3}`;
}, 1000);

// animate fade in
const mainText = document.querySelector(".text__title");
const strText = mainText.textContent;
const splitText = strText.split("");
mainText.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  mainText.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = mainText.querySelectorAll("span")[char];
  span.classList.add("text__titleFade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

// fade in

let wait = setTimeout(onWait, 1500);

function onWait() {
  const textDesc = document.querySelector(".text__desc");
  textDesc.classList.add("fadeIn");
}

let waitBtn = setTimeout(onWaitBtn, 2000);

function onWaitBtn() {
  const textButton = document.querySelector(".text__button");
  textButton.classList.add("fadeInButton");
}

let waitImage = setTimeout(onWaitImage, 2000);

function onWaitImage() {
  const mainImage = document.querySelector(".main__image");
  mainImage.classList.add("fadeInImage");
}

// ham menu

const hamMenu = document.querySelector(".nav__toggle");

hamMenu.addEventListener("click", function () {
  const navHamMenu = document.querySelector(".jumbotron .jumbotron__navMobile");
  navHamMenu.classList.toggle("fade__ada");

  console.log(navList);
});
