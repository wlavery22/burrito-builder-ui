import { useEffect, useState } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  const [orders, setOrders] = useState([]); 
  const [newOrder, setNewOrder] = useState({});

  const addOrders = (newOrder) => {
    setOrders(prevOrders => [...prevOrders, newOrder]);
  }
  
  useEffect(() => {
    getOrders()
    .then(data => setOrders(data.orders))
    .catch((err) => console.error("Error fetching:", err));
  }, []);

  async function postOrder(newOrder) {
    try {
      const response = await fetch("http://localhost:3001/api/v1/orders", {
        method: 'POST',
        body: JSON.stringify(newOrder), 
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
      console.error("Error posting order:", error);
    }
  }

// data shape: {name: <String>, ingredients: <Array of Strings>}

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrders={addOrders} postOrder={postOrder} />
      </header>

      <Orders orders={orders} />
    </main>
  );
}

export default App;


