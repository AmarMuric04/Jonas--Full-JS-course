/*import icons from '../img/icons.svg'; Parcel 1 */
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //0) Update class to selected recipe
    resultsView.update(model.getSearchResultsPage());

    //1) Loading recipe
    await model.loadRecipe(id);

    //2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    //0) rendering spinner
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;

    //1) Loading array of results
    await model.loadSearchResult(query);

    //2) Clearing main window
    document.querySelector('.recipe').innerHTML = '';

    //3) Rendering list of results
    resultsView.render(model.getSearchResultsPage());

    //4) render initial paginiation button/s
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (page) {
  //1) Render new results
  resultsView.render(model.getSearchResultsPage(page));

  //2) Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  model.updateServings(newServings);
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlBookmark = function () {
  //Add bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  //Remove bookmark
  else model.removeBookmark(model.state.recipe.id);

  recipeView.update(model.state.recipe);
  return;
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
