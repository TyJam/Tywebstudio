/* FAQs section +++++++++++++++++++++*/
document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll('.right li');

  listItems.forEach(item => {
    item.addEventListener('click', () => {
      const additionalInfoDiv = item.querySelector('.additional-info');

      document.querySelectorAll('.additional-info').forEach(div => {
        if (div !== additionalInfoDiv) {
          div.classList.remove('visible');
        }
      });

      additionalInfoDiv.classList.toggle('visible');
    });
  });
});


/* ABOUT JAVASCRIPT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const letterContainer = document.querySelector(".letter-container");
const descriptionParagraph = document.querySelector(".bottom-div p");
const bottomImage = document.querySelector(".bottom-image");
const menuItems = document.querySelectorAll(".research_base .research_menu h1");

const contentMap = {
  "Research": {
      text: "Our diverse team – web strategists, designers, and technical experts – gains crucial insights into your business, industry, and customers. This early analysis of key aspects like target audience, brand positioning, and user flow empowers us to create a website uniquely tailored to meet your specific requirements.",
      imageSrc: "./images/aboutImage/research_Image.png"
  },
  "Discovery": {
      text: "The Discovery phase involves uncovering essential insights into your brand, audience, and market positioning to ensure a successful project foundation.",
      imageSrc: "./images/aboutImage/discoverImage.png"
  },
  "Design": {
      text: "During the Design phase, we craft visually engaging and user-centric interfaces tailored to resonate with your audience and brand identity.",
      imageSrc: "./images/aboutImage/designImage.png"
  },
  "Content": {
      text: "Content creation focuses on generating informative and engaging material that aligns with your brand voice and enhances the user experience.",
      imageSrc: "./images/aboutImage/contentImage.png"
  },
  "Development": {
      text: "The Development stage brings design and functionality to life through coding and testing, ensuring a seamless and interactive user experience.",
      imageSrc: "./images/aboutImage/developmentImage.png"
  },
  "Optimization + Launch": {
      text: "Final optimization and launch phase ensure peak performance and readiness for public access, setting the stage for your website’s success.",
      imageSrc: "./images/aboutImage/optimization_&_launch.png"
  }
};

const contentKeys = Object.keys(contentMap);
let currentIndex = 0;

function updateContent() {
  const selectedMenu = contentKeys[currentIndex];
  letterContainer.innerHTML = `<span class="letter-a">${selectedMenu}</span><span class="letter-b">${selectedMenu}</span>`;
  descriptionParagraph.innerText = contentMap[selectedMenu].text;
  
  bottomImage.src = contentMap[selectedMenu].imageSrc;
  currentIndex = (currentIndex + 1) % contentKeys.length;
}

function startMobileCycle() {
  if (window.innerWidth < 768) {
      setInterval(updateContent, 5000);
  }
}

function setupButtonControls() {
  menuItems.forEach(item => {
      item.addEventListener("click", (event) => {
          const selectedMenu = event.target.innerText;

          letterContainer.innerHTML = `<span class="letter-a">${selectedMenu}</span><span class="letter-b">${selectedMenu}</span>`;
          descriptionParagraph.innerText = contentMap[selectedMenu].text;
          bottomImage.src = contentMap[selectedMenu].imageSrc;
      });
  });
}

function init() {
  if (window.innerWidth < 768) {
      startMobileCycle();
  } else {
      setupButtonControls();
  }
}

init();

window.addEventListener("resize", init);
