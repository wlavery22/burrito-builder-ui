import { useState } from "react";
import "./OrderForm.css";

function OrderForm({ addOrders, postOrder }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // if (name.length === 1 && ingredients.length >= 1) {
      const newOrder = {
        name: name,
        ingredients: ingredients,
        id: Date.now()
      };
      addOrders(newOrder);
      postOrder(newOrder);
      clearInputs();

    } 
  
   
  function clearInputs() {
    setName("");
    setIngredients([]);
  };

  const possibleIngredients = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];

  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        onClick={(e) => {
          e.preventDefault();
          // setIngredients(ingredient); 
          setIngredients(prevIngredients => [...prevIngredients, ingredient]);

          console.log("INGREDIENT:", ingredient)
        }}
      >
        {ingredient}
      </button>
    );
  }); 
  
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
          console.log(e.target.value)
        }
      }

      />
      {ingredientButtons}

      <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>

      <button onClick={(e) => handleSubmit(e)}>Submit Order</button>
    </form>
  );
}

export default OrderForm;
