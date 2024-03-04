import { useEffect, useState } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  const [orders, setOrders] = useState([]); 

  const addOrders = () => {
    setOrders()
  }

  useEffect(() => {
    getOrders().catch((err) => console.error("Error fetching:", err));
  });

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrders={addOrders} />
      </header>

      <Orders orders={orders} />
    </main>
  );
}

export default App;


