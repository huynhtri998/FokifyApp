import 'regenerator-runtime/runtime'

export const state = {
  recipe: {}
};

export const loadRecipe = async function(id){
  try {
    const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`);
    const data = await res.json();

    console.log(res,data)
    if (!res.ok) throw new Error(`${data.message} : ${res.status}`)

    let {recipe} = data.data;
    state.recipe = recipe;
    console.log(state.recipe);
  }catch (err){
    alert(err);
  }
}
