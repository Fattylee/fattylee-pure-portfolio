const aboutFirstParagraph = document.querySelector("#about p");
const intro = aboutFirstParagraph.textContent.toString().split("");
aboutFirstParagraph.innerHTML = ``;

let span = document.createElement("span");
span.classList.add("blink");
span.textContent = " _";
aboutFirstParagraph.appendChild(span);

const setTimer = (timeout, letters) => {
  return (timeout * 1000) / letters.length;
};
const clearInt = setInterval(() => {
  if (intro.length === 0) {
    clearInterval(clearInt);
    span.remove();
    return;
  }

  let textNode = intro.splice(0, 1)[0];
  textNode = document.createTextNode(textNode);
  aboutFirstParagraph.insertBefore(textNode, span);
}, setTimer(5, intro));

window.onscroll = function scroll() {
  const scrollValue =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollValue > 70) {
    document.querySelector("nav").classList.add("nav-bg");
  } else {
    document.querySelector("nav").classList.remove("nav-bg");
  }
};
