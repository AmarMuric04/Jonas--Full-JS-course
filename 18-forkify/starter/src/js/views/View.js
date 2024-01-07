import icons from 'url:../../img/icons.svg'; /* Parcel 2 */

export default class View {
  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {Boolean} [render=true] if false create HTML string instead to rendering to the DOM
   * @returns {undefined  | string} A HTML is returned if render=false
   * @this {Object} View instance (class)
   * @author Amar Muric
   * @todo finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;

    const html = this._generateHTML();

    if (!render) return html;

    this._clearParentHTML();
    //prettier-ignore
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  update(data) {
    this._data = data;

    const newHTML = this._generateHTML();

    const newDOM = document.createRange().createContextualFragment(newHTML);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // Updates changed text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Updates changed datasets
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
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
    this._clearParentHTML();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
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
