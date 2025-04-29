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
    const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e897b');
    const data = await res.json();

    console.log(res,data)
    if (!res.ok) throw new Error(`${data.message} : ${res.status}`)

    let {recipe} = data.data;

    console.log(recipe);

  }catch (err){
    alert(err)
  }
}

showRecipe();
