import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as model from './model.js';
import recipeView from "./views/recipeView";

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const showRecipe = async function (){
  try {
    const id = window.location.hash.slice(1);
    if (!id) return
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);

  }catch (err){
    alert(err)
  }
};

['hashchange','load'].forEach(event => window.addEventListener(event, showRecipe));

