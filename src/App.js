import "./App.css";
import { useState } from "react";
import react from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */





function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  function addToCart(name, price) {
    setCart([...cart, name]);
    setTotal(total + price);
    console.log(cart);
  }

  const bakeryItems = bakeryData.map((item, index) => {
    return (
      <BakeryItem key={index} name={item.name} desc={item.description}
        price={item.price} image={item.image} 
        func={addToCart}/>
    )
  })

  const cartElement = cart.map((item) => {
    return (
      <div>
        <p className="cart-item">{item}</p>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div class="everything">
        <div className="menu">
          {bakeryItems}
        </div>
        

        <div class="cart-container">
          <h2>Cart</h2>
          {cartElement}
          <h4>Total: ${total}</h4>
        </div>

      </div>
      
    </div>
  );
}

export default App;
