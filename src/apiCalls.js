async function getOrders() {
  try {
     const response = await fetch("http://localhost:3001/api/v1/orders");
     const data = await response.json();
     return data;
  } catch (error) {
     console.error("Error fetching orders:", error);
  }
}

// async function postOrder(newOrder) {
//   try {
//     const response = await fetch("http://localhost:3001/api/v1/orders", {
//       method: 'POST',
//       body: JSON.stringify(newOrder), 
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const data = await response.json();
//       return data;
//   } catch (error) {
//     console.error("Error posting order:", error);
//   }
// }

export { getOrders };
 
 