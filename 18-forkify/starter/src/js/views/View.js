import icons from 'url:../../img/icons.svg'; /* Parcel 2 */

export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;

    const html = this._generateHTML();

    this._clearParentHTML();
    //prettier-ignore
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  _clearParentHTML() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const html = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
`;
    this._clearParentHTML();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderSuccess(message = this._successMessage) {
    const html = `<div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
  }

  renderError(message = this._errorMessage) {
    const html = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this._clearParentHTML();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
