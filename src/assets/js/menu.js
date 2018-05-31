import {$} from 'jquery';

const menu = () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const headerMenu = (e) => {
    menu
      .classList
      .contains('header__menu-responsive--show')
      ? menu
        .classList
        .remove('header__menu-responsive--show')
      : menu
        .classList
        .add('header__menu-responsive--show');
  }

  menuToggle.addEventListener('click', headerMenu);

  window.addEventListener('resize', () => {
    if (menu.classList.contains('header__menu-responsive--show')) {
      menu
        .classList
        .remove('header__menu-responsive--show')
    }
  });
}

export default menu;
