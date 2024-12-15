
if(window.location.pathname ==='/index.html'){
     const UL = document.querySelector('.slidingVertical');
     const Li = UL.getElementsByTagName('li');
     Li[0].style.animation = "topToBottom 9.5s linear infinite 0s";
     Li[1].style.animation = "topToBottom 9.5s linear infinite 2.5s";
     Li[2].style.animation = "topToBottom 9.5s linear infinite 5s";
     Li[3].style.animation = "topToBottom 9.5s linear infinite 7.5s";
}

//Select elements 
const menu =  document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.hamburger');
const openMenuBtns = document.querySelectorAll('.openmenu');
const tsMargins = document.querySelectorAll('.ts');
let lastScrollTop = 0;

//Mobile menu toggle 
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
})


//Submenu  toggle for open menu buttons  // Handling the open and close of dropdowns
    openMenuBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const subMenu = event.target.parentElement.querySelector(".menu");
            subMenu.classList.toggle("open");

            // Call the function to handle margin logic
            removeClass(tsMargins, event);
        });
    });

    function removeClass(tsMargins, event) {
        const sibling = event.target.parentElement.nextElementSibling;
        const marginClasses = {
            'margin-ts-top': () => {
                tsMargins[0].lastElementChild.classList.add("MarginTopTwe");
                LiType3.classList.add('responMargin');
                tsMargins[1].lastElementChild.classList.remove("open");
                tsMargins[2].lastElementChild.classList.remove("open");
            },
            'margin-st-top': () => {
                tsMargins[1].lastElementChild.classList.add("MarginTopTwe");
                tsMargins[2].classList.add("DropMargin");
                tsMargins[0].lastElementChild.classList.remove("open");
                tsMargins[2].lastElementChild.classList.remove("open");
            },
            'margin-s-top': () => {
                tsMargins[2].lastElementChild.classList.add("MarginTopTwe");
                tsMargins[2].classList.add("DropMargin");
                tsMargins[0].lastElementChild.classList.remove("open");
                tsMargins[1].lastElementChild.classList.remove("open");
            }
        };

        Object.keys(marginClasses).forEach(marginClass => {
            if (sibling.classList.contains(marginClass)) {
                marginClasses[marginClass]();
            }
        });
    }


//Scroll Behavior
window.addEventListener('Scroll', () =>{
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;


    if(currentScroll > lastScrollTop){

        //Scrolling up 
        menu.classList.add('clsoe');
        menu.classList.remove('open');
        tsMargins.forEach((ts)=> ts.lastElementChild.classList.remove('open'));
    }else{
        //Scrolling down
        menu.classList.remove('close');

    }

    //Handle reset a top of the page 
    if(currentScroll === 0){
        menu.classList.remove('open', 'close');
    }
    lastScrollTop = currentScroll <= 0 ? 0: currentScroll; //prevent negative scroll 
})

// Handle responsiveness (matchMedia example)
const mql = window.matchMedia("(max-width: 320px)");
mql.addEventListener((e) => {
    if (e.matches) {
        console.log("Viewport is less than or equal to 320px");
        // Add any responsive logic here
    } else {
        console.log("Viewport is greater than 320px");
    }
});