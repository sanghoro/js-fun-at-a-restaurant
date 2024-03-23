
function takeOrder(orderNumber, ordersArray) {
  if (ordersArray.length < 3) {
    return ordersArray.push(orderNumber)
  } 
}


function refundOrder(orderNumber, ordersArray) {
  for (var i = 0; i < ordersArray.length; i++) {
    if (ordersArray[i].orderNumber === orderNumber) {
      ordersArray.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  var orderItems = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    orderItems.push(deliveryOrders[i].item)
  }
  return orderItems.join(", ")
}



function searchOrder(deliveryOrders, item){

  for (var i = 0; i < deliveryOrders.length; i++) {

    if (deliveryOrders[i].item === item) {
    return true;
   }
   } 
  return false
   
   }

  

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}