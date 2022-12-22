// This code is for the menu action
// const menuListClose = document.getElementById('menu-list');
// const iconMenuHeader = document.getElementById('menu-icon-header').addEventListener('click', () =>{
//   menuListClose.classList.toggle('menu-list-open');
// });

// This code is for create the slider
window.addEventListener('load', function () {
  new Glider(document.querySelector('.main__skills-container__skills'), {

    slidesToShow: 3,
    dots: '.slider-indicators-container',
    draggable: true,
    arrows: {
      prev: '.left-button-slider',
      next: '.right-button-slider'
    }

  });
});

