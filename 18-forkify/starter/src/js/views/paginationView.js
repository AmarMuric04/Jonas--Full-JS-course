import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const button = e.target.closest('.btn--inline');
      if (!button) return;

      const goToPage = +button.dataset.goto;
      handler(goToPage);
    });
  }

  _generateHTML() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //First page with other pages
    if (currPage === 1 && numPages > 1) return this._generateButton('next');

    //Last page
    //prettier-ignore
    if (currPage === numPages && numPages > 2) return this._generateButton('prev');

    //Other page
    if (currPage < numPages) return this._generateButton('both');

    //First page with no other pages
    return '';
  }
  _generateButton(direction) {
    const currPage = this._data.page;

    if (direction === 'next') {
      return `
      <button data-goto="${
        currPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }

    if (direction === 'prev') {
      return `
      <button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>`;
    }

    if (direction === 'both') {
      return `
      <button data-goto="${
        currPage + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      <button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>`;
    }
  }
}

export default new PaginationView();
