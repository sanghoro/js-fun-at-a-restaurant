function createRestaurant(name, menus) {
var restaurant = {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
  },
  
}
return restaurant
}


function addMenuItem(restaurant, item) {
  if (!restaurant.menus[item.type].includes(item)) {
    return restaurant.menus[item.type].push(item)
  }
  
}

function removeMenuItem(restaurant, item, itemType) {

var itemIndex = restaurant.menus[itemType].findIndex(function(menuItem){
  return menuItem.name === item;
}
  )

if (itemIndex !== -1) {
  restaurant.menus[itemType].splice(itemIndex, 1)
    return `No one is eating our ${item} - it has been removed from the ${itemType} menu!`
  } else {
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  }

}

function checkForFood(restaurant, item) {

var itemIndex = restaurant.menus[item.type].findIndex(function(menuItem){
  return menuItem.name === item.name;
}
  )

if (itemIndex !== -1) {
    return `Yes, we're serving ${item.name} today!`
  } else {
    return `Sorry, we aren't serving ${item.name} today.`
  }

  

}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}