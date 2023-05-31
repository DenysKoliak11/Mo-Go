
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
let introCenter = intro.offsetHeight / 2;
let scrollTop = window.scrollY;
checkScroll(scrollTop);
window.addEventListener('scroll', () => {

  scrollTop = window.scrollY;
  checkScroll(scrollTop);

});

function checkScroll(scrollTop) {
  if (scrollTop >= introCenter) {
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed')
  }
};

$("[data-slider]").slick({
  infinite: true,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});





