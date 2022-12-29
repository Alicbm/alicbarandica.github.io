//Code for the menu action
const button = document.getElementById('toggle-menu');
const menu = document.querySelector('.header__container-navbar__list');

button.addEventListener('click', () => {
  const showMenu = document.querySelector('.list__menu-show');
  showMenu ? 
  menu.classList.remove('list__menu-show')
  : menu.classList.add('list__menu-show');
})

const daySelect = (element) => {
  document.querySelector('.active').classList.remove('active');
  element.classList.add('active');
}

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const skills = document.querySelector('.skills');
const contact = document.querySelector('.contact');

home.addEventListener('click', () => daySelect(home))
about.addEventListener('click', () => daySelect(about))
projects.addEventListener('click', () => daySelect(projects))
skills.addEventListener('click', () => daySelect(skills))
contact.addEventListener('click', () => daySelect(contact))

// This code is for create the slider
window.addEventListener('load', function () {
  new Glider(document.querySelector('.main__skills-container__skills'), {

    slidesToShow: 1,
    dots: '.slider-indicators-container',
    draggable: true,
    arrows: {
      prev: '.left-button-slider',
      next: '.right-button-slider'
    },
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
});

