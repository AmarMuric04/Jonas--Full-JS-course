/*import icons from '../img/icons.svg'; Parcel 1 */
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';

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
    //1)Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    //2) Loading recipe
    await model.loadRecipe(id);

    //3) Rendering recipe
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

  //Update bookmark
  recipeView.update(model.state.recipe);

  //Render bookmarks
  bookmarksView.render(model.state.bookmarks);
  return;
};

const controlBookmarks2 = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    //Rendering spinner
    addRecipeView.renderSpinner();

    //Uploading new recipe
    await model.uploadRecipe(newRecipe);

    //Rendering recipe
    recipeView.render(model.state.recipe);

    //Rendering success message
    addRecipeView.renderSuccess();

    //Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    //Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    //Closing form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks2);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView._addHandlerUpload(controlAddRecipe);
};
init();
