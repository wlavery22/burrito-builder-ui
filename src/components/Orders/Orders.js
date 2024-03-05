import React from "react";
import "./Orders.css";
import Order from '../Order/Order';

const Orders = ({ orders }) => {
  console.log("orders:=====", orders);
  const orderEls = orders.map((order) => {
    // const { id, name, ingredients} = order
    return (
      <div className="order" key={order.id}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
        {order.ingredients && order.ingredients.length > 0 ? (
            order.ingredients.map((ingredient) => {
              return <li key={ingredient}>{ingredient}</li>;
            })
          ) : (
            <li>No ingredients selected</li>
          )}
        </ul>
      </div>
    );
 });

  return (
    <section>
      {orderEls.length ? orderEls : <p>No orders yet!</p>}
    </section>

  );
};

export default Orders;