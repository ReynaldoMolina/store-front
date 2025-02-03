function getOrderTotals(list) {
  let total = 0;
  let quantity = 0;
  let items = list.length;

  for (const element of list) {
    total += (element.quantity * element.sellPrice);
  }

  for (const element of list) {
    quantity += element.quantity;
  }
 
  return { total, quantity, items };
}

export { getOrderTotals };