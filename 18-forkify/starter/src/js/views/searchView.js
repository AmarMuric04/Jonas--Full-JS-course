import View from './View';

class SearchView extends View {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const value = this._parentElement.querySelector('.search__field').value;
    if (!value) return;
    this._clearInput();
    return value;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
