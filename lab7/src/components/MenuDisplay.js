import React, { useState } from "react";
import { menuData } from "./data/menuData";
import MenuItem from "./MenuItem";
import Cart from "./Cart";

function MenuDisplay() {
  const [selectedCategory, setSelectedCategory] = useState(menuData[0].category);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div>
      <div>
        {menuData.map((category) => (
          <button key={category.category} onClick={() => setSelectedCategory(category.category)}>
            {category.category}
          </button>
        ))}
      </div>

      <div>
        {menuData
          .find((cat) => cat.category === selectedCategory)
          .items.map((item) => (
            <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
          ))}
      </div>

      <Cart cart={cart} />
    </div>
  );
}

export default MenuDisplay;
