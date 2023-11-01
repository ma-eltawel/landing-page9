let menuToggle = document.querySelector("#menu-but"), navMenu = document.querySelector("nav");

menuToggle.onclick = () => {
    menuToggle.classList.toggle("fa-times");
    navMenu.classList.toggle("show-menu");
}

var swiper = new Swiper(".images", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
});

window.onscroll = () => {
    menuToggle.classList.remove("fa-times");
    navMenu.classList.remove("show-menu");
};