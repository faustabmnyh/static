$(".carousel").carousel({
  interval: 0,
});
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
// image
tl.from(".main__imageAtas", {
  duration: 1,
  y: -1500,
  opacity: 0,
}).from(
  ".main__imageBawah",
  {
    duration: 1,
    y: 1000,
    opacity: 0,
  },
  "-=0.5"
);

tl.from(
  ".main__titleTop",
  {
    duration: 1,
    y: -200,
    opacity: 0,
  },
  "-=0.5"
)
  .from(
    ".main__titleBot",
    {
      duration: 1,
      y: 200,
      opacity: 0,
    },
    "-=0.5"
  )
  .from(
    ".main__titleGaris",
    {
      duration: 1,
      x: -200,
      opacity: 0,
    },
    "-=0.5"
  )
  .from(
    ".main__desc",
    {
      opacity: 0,
      duration: 1,
    },
    "-=0.5"
  )
  .from(
    ".header",
    {
      opacity: 0,
      duration: 1,
    },
    "-=1"
  );

// ham menu

const tlNav = gsap.timeline({ paused: true, reversed: true });

const hamMenu = document.querySelector(".nav__toggle");

tlNav.from(".nav__navMobile", 1, {
  height: "0%",
  opacity: 0,
});

hamMenu.addEventListener("click", function () {
  const navHamMenu = document.querySelector(".nav__navMobile");
  navHamMenu.classList.toggle("fade__ada");
  toggleTween(tlNav);
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
