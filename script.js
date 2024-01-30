var mgBottomElement, h1Element, h2Element, innerContainerElement, delMan, delMan2, about, text, phone, mission, par, container, cards, footerTop, footerMiddle, footerBottom;

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Target the elements
    mgBottomElement = document.querySelector('.mg-bottom-22px');
    h1Element = document.querySelector('h1');
    h2Element = document.querySelectorAll('h2');
    innerContainerElement = document.querySelector('.inner-container');
    delMan = document.querySelector('.position-relative img');
    delMan2 = document.querySelector('#image');
    about = document.querySelector("#about");
    text = document.querySelector("#text")
    phone = document.querySelector('#phone');
    mission = document.querySelector('#mission'); 
    par = document.querySelector('#par');
    container = document.querySelector('#card-container');
    cards = document.querySelectorAll(".card.chronology");
    footerTop = document.querySelector(".footer-top");
    footerMiddle = document.querySelector(".footer-middle");
    footerBottom = document.querySelector(".footer-bottom");

    // GSAP animation on initial load
    gsap.from(mgBottomElement, { opacity: 0, y: -20, ease: "power2.inOut", duration: 1 });
    gsap.from(h1Element, { opacity: 0, y: 20, ease: "power2.inOut", duration: 1 });
    gsap.from(h2Element, { opacity: 0, y: 20, ease: "power2.inOut", duration: 1 });
    gsap.from(text, { opacity: 0, y: 20, ease: "power2.inOut", duration: 1 });
    gsap.from(about, { opacity: 0, y: 20, ease: "power2.inOut", duration: 1 });
    gsap.from(cards, { scale: 0.5, opacity: 0, y: 20, ease: "power2.inOut", duration: 1 });
    gsap.from(container, { opacity: 0, y: 20, ease: "power2.inOut", duration: 1 });
    gsap.from(mission, { opacity: 0, y: 20, ease: "power2.inOut", duration: 1 });
    gsap.from(par, { opacity: 0, y: 20, ease: "power1.inOut", duration: 1 });
    gsap.from(innerContainerElement, { opacity: 0, y: 20, ease: "power2.inOut", duration: 1 });
    gsap.from(delMan, { opacity: 0, scale: 0.1, ease: "power1.inOut", stagger: 0.2, duration: 0.5 });
    gsap.from(delMan2, { opacity: 0, scale: 0.7, ease: "power1.inOut", stagger: 0.7, duration: 0.5 });
    gsap.from(phone, { opacity: 0, scale: 0.3, ease: "power1.inOut", stagger: 0.1, duration: 0.5 });
    gsap.from(footerTop, {opacity: 0.2, ease: "power2.inOut", y: 20, duration: 1});
    gsap.from(footerMiddle, {opacity: 0.4, ease: "power2.inOut", y: 15, duration: 1});
    gsap.from(footerBottom, {opacity: 0, ease: "power2.Out", y: 0, duration: 4});
});

      document.addEventListener("DOMContentLoaded", function () {
        // Target the image elements
        var imageWrapper1 = document.querySelector('.hero-02-image-absolute-01');
        var imageWrapper2 = document.querySelector('.hero-02-image-absolute-02');
        var companyCards = document.querySelectorAll(".card.press.link-content.inline-block");
        // Quick pop animation when the page is loaded
        gsap.from(companyCards, { opacity: 0, scale: 0.8, ease: "power2.inOut", duration: 0.5 });
        gsap.from([imageWrapper1, imageWrapper2], { opacity: 0, scale: 1.2, ease: "power1.inOut", duration: 0.5, stagger: 0.2, onComplete: startUpDownAnimation });
    
        function startUpDownAnimation() {
            // Moving up and down animation after the page is loaded
            gsap.to(imageWrapper1, { y: 24, ease: "power1.inOut", duration: 4 });
            gsap.to(imageWrapper2, { y: -24,  ease: "power1.inOut", duration: 4 });
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
      // Target the navigation elements
      var navMenuItems = document.querySelectorAll('.header-nav-list-item');
      var cart = document.querySelector(".commerce-commercecartopenlink");
      var buttons = document.querySelectorAll(".small.button")
      var logo = document.querySelector(".header-logo-link.nav-brand img")
      var numbers = document.querySelectorAll(".mg-bottom-6px");
      var texts = document.querySelectorAll(".text-200.medium");
      var partners = document.querySelector("#partners");
      // GSAP animation for navigation items
      gsap.from(navMenuItems, { opacity: 0, y: -30, ease: "power2.inOut", duration: 1 });
      gsap.from(cart, { opacity: 0, y: -30, ease: "power2.inOut", duration: 1 });
      gsap.from(buttons, { opacity: 0, y: -30, ease: "power2.inOut", duration: 1 });
      gsap.from(logo, { opacity: 0, y: -30, ease: "power2.inOut", duration: 1 });
      gsap.from(numbers, { opacity: 1, y: -30, ease: "power2.inOut", duration: 1, stagger: 0.2 });
      gsap.from(texts, { opacity: 1, y: -30, ease: "power2.inOut", duration: 1, stagger: 0.1 });
      gsap.from(partners, { opacity: 0, y: 30, ease: "power2.inOut", duration: 1 });
    });
       // Wait for the DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    const hamBtn = document.querySelector(".hamburger-menu-wrapper.nav-button");
    const hamMenu = document.querySelector(".nav-menu");
    const Xbutton = document.querySelector(".fas.fa-times");
    const cart = document .querySelector(".commerce-commercecartopenlink");
      hamBtn.addEventListener('click', function() {
        if(window.innerWidth < 991) {
        hamMenu.style.display = 'block';
        hamBtn.style.display = 'none';
        Xbutton.style.display = 'block'; 
        cart.style.display = 'none';
      }
      });
      Xbutton.addEventListener('click', function() {
        
        hamBtn.style.display = 'block';
        hamMenu.style.display = 'none';
        Xbutton.style.display = 'none';
        cart.style.display = 'block';
        
      });
      
  });
  const header = document.getElementsByClassName('header-wrapper')[0];
let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

window.onscroll = () => {
  const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

  if (prevScrollPos > currentScrollPos) {
    gsap.to(header, { y: 0, duration: 0.1, ease: 'power2.out' }); // show the header when scrolling up
  } else {
    gsap.to(header, { y: -header.offsetHeight, duration: 0.1, ease: 'power2.out' }); // hide the header when scrolling down
  }

  prevScrollPos = currentScrollPos;
};
var image = document.getElementById("image");
      var phone = document.getElementById("phone");
      var delMan = document.querySelector(".position-relative img");
      function playAnimation() {
        image.classList.add("pop-in-out");
        phone.classList.add("pop-in-out");
        delMan.classList.add("pop-in-out");
        setTimeout(function() {
          image.classList.remove("pop-in-out");
          phone.classList.remove("pop-in-out");
          delMan.classList.remove("pop-in-out");
        }, 2000); // The duration of the animation in milliseconds
      }
  
      window.addEventListener("scroll", playAnimation);