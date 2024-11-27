
/* REFACTORED NAVBAR JAVASCRIPT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.food-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('active');
});

const dropdowns = document.querySelectorAll('.food-dropdown > .food-dropdown-toggle');
dropdowns.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const icon = toggle.querySelector('.dropdown-icon');
        const dropdownMenu = toggle.nextElementSibling;

        
        if (icon.classList.contains('fa-chevron-down')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }

        
        dropdownMenu.classList.toggle('active-dropdown');
    });
});

const submenus = document.querySelectorAll('.food-submenu > a');
submenus.forEach(submenu => {
    submenu.addEventListener('click', (e) => {
        e.preventDefault();
        const submenuIcon = submenu.querySelector('.dropdown-icon');
        const subMenuList = submenu.nextElementSibling;

        
        document.querySelectorAll('.food-sub-menu').forEach(menu => {
            if (menu !== subMenuList) {
                menu.classList.remove('active-dropdown');
                const icon = menu.previousElementSibling.querySelector('.dropdown-icon');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });

        
        if (submenuIcon.classList.contains('fa-chevron-down')) {
            submenuIcon.classList.remove('fa-chevron-down');
            submenuIcon.classList.add('fa-chevron-up');
        } else {
            submenuIcon.classList.remove('fa-chevron-up');
            submenuIcon.classList.add('fa-chevron-down');
        }

        
        subMenuList.classList.toggle('active-dropdown');
    });
});







if(window.location.pathname ==='/index.html'){
  const UL = document.querySelector('.slidingVertical');
const Li = UL.getElementsByTagName('li');
Li[0].style.animation = "topToBottom 9.5s linear infinite 0s";
Li[1].style.animation = "topToBottom 9.5s linear infinite 2.5s";
Li[2].style.animation = "topToBottom 9.5s linear infinite 5s";
Li[3].style.animation = "topToBottom 9.5s linear infinite 7.5s";
}
const menuu= document.querySelector('.menu');
const close = document.querySelector('.dropbtn').getElementsByTagName('*')
const main = document.querySelector('.hero_image');
const Litype = document.querySelector('.litype2');
console.log(Litype);
const tsMargin = document.querySelectorAll('.ts');
const tsMarginBottom = document.querySelector('.margin-s-top');
const mql = window.matchMedia("(max-width:320px)")
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function (){
 menu_btn.classList.toggle('is-active'); 
 mobile_menu.classList.toggle('is-active');
})
  

//console.log(close);

const openMenuBtn = document.querySelectorAll('.openmenu');
//console.log(openMenuBtn);
openMenuBtn.forEach((btn) =>{
   /// console.log(btn);
     btn.addEventListener("click", (event)=>{
        //menu.classList.toggle('open');
       console.log(event.target.parentElement.nextSibling.nextElementSibling);
         const subMenu = event.target.parentElement.querySelector(".menu");
         subMenu.classList.toggle("open");
         if(event.target.classList.contains('openmenu')){
        //Litype.style.marginTop = '300px';
         }
          if(event.target.parentElement.nextSibling.nextElementSibling.classList.contains('margin-ts-top')){
             console.log(tsM)
          tsMargin[0].lastElementChild.style.marginTop = "20px";
            tsMargin[1].style.marginTop = "110px";
            //Litype.style.marginTop = '400px';
          }else if(event.target.parentElement.nextSibling.nextElementSibling.classList.contains('margin-st-top')){
            tsMargin[1].lastElementChild.style.marginTop = '20px';
            tsMargin[2].style.marginTop = '150px';
            //Litype.style.marginTop = '550px';

          }else if(event.target.parentElement.nextSibling.nextElementSibling.classList.contains('margin-s-top')){
             tsMargin[2].lastElementChild.style.marginTop= '20px';
             tsMarginBottom.style.marginTop = '150px';

          }

    
     });
    
})

window.addEventListener("click", (event) =>{
   //console.log(event.target);
   //!event.target.classNaem ==="open" 
    /*if(!event.target.classList.contain('navbar-burger') ){
        console.log(event.target);
    menu.classList.add('close');
    }*/
   //if(!event.currentTarget.contains(close) ){
    //menu.classList.add('close');
   //}
})
   /*console.log(main.offsetTop);


let position = window.pageYOffset;

 window.onscroll = function(){
   console.log(position);
   console.log(main.offsetTop);
  if(main.offsetTop === 110){
   menu.classList.add('close');
  }
 }*/

 //Keep track of previous scroll position 
 let prevSCrollPos = window.pageYOffset; 
//console.log(prevSCrollPos)

 window.addEventListener('scroll', function(){
   //current scroll position 
   const currentScrollPos = window.pageYOffset;
   //console.log(currentScrollPos)
  if(prevSCrollPos  <  currentScrollPos){
    //user has scrolled up 
    menu.classList.add('close');
  }else{
      menu.classList.remove('close');
  }

  if(currentScrollPos === 0 ){
   console.log();
   menu.classList.remove('open');
  }
  

 })

 function MatchMedia(mql){
  // let mql = window.matchMedia("(max-width:320")
 }


 
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


/* LOGO JAVASCRIPT +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/* FAQs section +++++++++++++++++++++*/
const listItems = document.querySelectorAll('.right li');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const additionalInfoDiv = item.querySelector('.additional-info');

    document.querySelectorAll('.additional-info').forEach(div => {
      if (div !== additionalInfoDiv) {
        div.style.display = 'none';
      }
    });

    if (additionalInfoDiv.style.display === 'block') {
      additionalInfoDiv.style.display = 'none';
    } else {
      additionalInfoDiv.style.display = 'block';
    }
  });
});