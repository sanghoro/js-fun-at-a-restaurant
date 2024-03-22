function nameMenuItem(name) {
return `Delicious ${name}`;
}

nameMenuItem('Burrito');
nameMenuItem('Pizza');
nameMenuItem('Taco');

function createMenuItem() {
  var menuItem = {
    name: nameMenuItem("French Toast"),
    price: 10.99,
    type: "breakfast"
  }
  return menuItem
}

function addIngredients(newIngredient, ingredients) {
  if (!ingredients.includes(newIngredient)){
    ingredients.push(newIngredient)
  }
  return ingredients;
}

function formatPrice(price) {
  var formattedPrice = `$${price}`;
  return formattedPrice;
}


function decreasePrice(price) {
  var price = 6 * 0.9;
  return price
}


function createRecipe() {
  return recipe = {
    title: nameMenuItem("Eggs & Bacon"),
    ingredients: ["eggs", "bacon"],
    type: "breakfast"
  }
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


