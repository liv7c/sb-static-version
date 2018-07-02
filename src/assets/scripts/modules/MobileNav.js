class MobileNav {
  constructor() {
    this.menuBtn = document.querySelector('.site-header__menu-icon');
    this.menuContent = document.querySelector('.site-header__menu-content');
    this.events();
  }

  events() {
    this.menuBtn.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    if (this.menuContent.className === 'site-header__menu-content') {
      this.menuContent.className =
        'site-header__menu-content site-header__menu-content--is-visible';
    } else {
      this.menuContent.className = 'site-header__menu-content';
    }

    console.log(this.menuBtn.className);
    if (this.menuBtn.className === 'site-header__menu-icon') {
      this.menuBtn.className =
        'site-header__menu-icon site-header__menu-icon--close-x';
    } else {
      this.menuBtn.className = 'site-header__menu-icon';
    }
  }
}

export default MobileNav;
