function nameMenuItem(name) {
return `Delicious ${name}`;
}

nameMenuItem('Burrito');
nameMenuItem('Pizza');
nameMenuItem('Taco');

function createMenuItem(name, price, type) {
  var menuItem = { 
    name: name, 
    price: price, 
    type: type 
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
  var formattedPrice = `$${price}`
  return formattedPrice
}


function decreasePrice(price) {
  return price * 0.9
}

/// 1.we are getting a recipe object
//2. return recipe object
//3. print out object

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe
}





module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


