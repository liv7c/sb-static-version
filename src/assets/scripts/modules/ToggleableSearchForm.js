class ToggleableSearchForm {
  constructor() {
    this.searchForm = document.querySelector('.search-form');
    this.searchFormInput = document.querySelector('.search-form__input');
    this.toggleFormBtns = document.querySelectorAll('.toggle-form-btn');
    this.searchIcons = document.querySelectorAll('.toggle-form-btn__search');
    this.crossIcons = document.querySelectorAll('.toggle-form-btn__cross');
    this.events();
  }

  events() {
    const toggleBtns = Array.prototype.slice.call(this.toggleFormBtns);
    toggleBtns.forEach(btn =>
      btn.addEventListener('click', this.toggleForm.bind(this))
    );
  }

  toggleForm() {
    // turn node list into arrays
    const searchIconArr = Array.prototype.slice.call(this.searchIcons);
    const crossIconArr = Array.prototype.slice.call(this.crossIcons);

    // for searchForm
    if (this.searchForm.className === 'search-form') {
      this.searchForm.className = 'search-form search-form--visible';
      this.searchFormInput.focus();
      searchIconArr.forEach(
        icon => (icon.className = 'icon-search toggle-form-btn__search')
      );
      crossIconArr.forEach(
        icon =>
          (icon.className =
            'icon-cross toggle-form-btn__cross toggle-form-btn__cross--visible')
      );
    } else {
      this.searchForm.className = 'search-form';
      searchIconArr.forEach(
        icon =>
          (icon.className =
            'icon-search toggle-form-btn__search toggle-form-btn__search--visible')
      );
      crossIconArr.forEach(
        icon => (icon.className = 'icon-cross toggle-form-btn__cross')
      );
    }
  }
}

export default ToggleableSearchForm;
