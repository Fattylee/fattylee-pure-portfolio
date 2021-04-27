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

// Populate projects
const projectDatas = [
  {
    title: "Sayours",
    host: "https://fattylee-sayurs.netlify.app/",
    coverImage:
      "https://live.staticflickr.com/65535/50852727786_049f4e290c_z.jpg",
    github: "https://github.com/Fattylee/fattylee_social_network",
  },
  {
    title: "Storybook",
    host: "https://fattylee-storybook.herokuapp.com/",
    coverImage:
      "https://live.staticflickr.com/65535/50853039501_c2d473ec6b_z.jpg",
    github: "https://github.com/Fattylee/fattylee-storybook",
  },
  {
    title: "React Movie App",
    host: "https://fattylee-movie-app.netlify.app/",
    coverImage:
      "https://live.staticflickr.com/65535/51141899468_32cd027ec0_b.jpg",
    github: "https://github.com/Fattylee/fattylee-movie-app",
  },
  {
    title: "Web chat",
    host: "https://fattylee-web-chat.herokuapp.com/",
    coverImage:
      "https://live.staticflickr.com/65535/50915503213_9b11244564_z.jpg",
    github: "https://github.com/Fattylee/fattylee-web-chat",
  },
  {
    title: "Fattylee web services api",
    host: "https://fattylee-todos-api.herokuapp.com",
    coverImage:
      "https://live.staticflickr.com/65535/50918143968_7481213684.jpg",
    github: "https://github.com/Fattylee/fattylee-todos-api",
  },
  {
    title: "Portfolio Website",
    host: "https://fatai-balogun-portfolio.netlify.app",
    coverImage:
      "https://live.staticflickr.com/65535/50918366788_a9ede53a87.jpg",
    github: "https://github.com/Fattylee/fattylee-pure-portfolio",
  },
];

const projectTemplate = projectDatas
  .map(
    ({ title, host, coverImage, github }) => `<div class="project">
          <a
            href=${host}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="lazyload"
              data-src=${coverImage}
              alt=${title}
            />
            <p>${title}</p>
          </a>

          <a
            class="link-to-github"
            title="Open the github repo for this project"
            href=${github}
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-github fa-2x"></i
          ></a>
        </div>`
  )
  .join("");

document.querySelector(".project-container").innerHTML = projectTemplate;

// End - Populate projects
