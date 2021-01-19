const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  let newEffect = document.createElement("span");

  console.log(e.target.offsetLeft);

  const horizontalPost = e.clientX - e.target.offsetLeft;
  const verticalPost = e.clientY - e.target.offsetTop;

  newEffect.style.left = horizontalPost + "px";
  newEffect.style.top = verticalPost + "px";

  btn.appendChild(newEffect);
  setTimeout(() => {
    newEffect.remove();
  }, 1500);
});
