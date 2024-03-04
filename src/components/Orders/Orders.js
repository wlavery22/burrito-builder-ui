import React from "react";
import "./Orders.css";
import Order from '../Order/Order';

const Orders = ({ orders }) => {
  console.log("orders:=====", orders);
  const orderEls = orders.map((order) => {
    // const { id, name, ingredients} = order
    return (
      <div className="order">
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map((ingredient) => {
            return <li>{ingredient}</li>;
          })}
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
