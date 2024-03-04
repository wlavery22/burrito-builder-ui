function getOrders() {
  return fetch("http://localhost:3001/api/v1/orders")
  .then(response => response.json()) 
}

function postOrder(newOrder) {
  return fetch("http://localhost:3001/api/v1/orders", {
    method: 'POST',
    body: JSON.stringify(newOrder), 
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
}

export { getOrders, postOrder };

 