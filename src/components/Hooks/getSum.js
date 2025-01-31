function getSum(items) {
  console.log('items', items);
  
  let total = 0;
  for (const element of items) {
    total += (element.quantity * element.sellPrice);
  }
 
  return total;
}

export { getSum };