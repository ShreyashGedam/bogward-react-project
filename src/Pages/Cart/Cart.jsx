import { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
// import "./Home.css";
import "../Home/Home.css";
import axios from "axios";
import Card from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { CartContext } from "../../Context/CartContext";

function Cart() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const { setCart, cart } = useContext(CartContext);

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    console.log(cart);
    setData(cart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getCart = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === id) {
        return cart[i].quantity;
      }
    }
    return false;
  };

  const addToCart = (pro) => {
    setCart([...cart, { ...pro, quantity: 1 }]);
  };

  const increaseQuantity = (id) => {
    const newCart = [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === id) {
        newCart.push({ ...cart[i], quantity: cart[i].quantity + 1 });
      } else {
        newCart.push(cart[i]);
      }
    }
    setCart(newCart);

    // setCart((prev) =>
    //   prev.map((elem) =>
    //     elem._id === id ? { ...elem, quantity: elem.quantity + 1 } : elem
    //   )
    // );
  };

  const decreaseQuantity = (id) => {
    const newCart = [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === id) {
        if (cart[i].quantity !== 1)
          newCart.push({ ...cart[i], quantity: cart[i].quantity - 1 });
      } else {
        newCart.push(cart[i]);
      }
    }
    setCart(newCart);
  };

  return (
    <div>
      <Navbar />
      <div className="home-main">
        {data.map((elem) => (
          <div key={elem._id} style={{ border: "1px solid" }}>
            <div onClick={() => navigate(`/single-product/${elem._id}`)}>
              <Card image={elem.image} name={elem.name} price={elem.cost} />
            </div>
            {getCart(elem._id) ? (
              <div className="cart-button">
                <div onClick={() => decreaseQuantity(elem._id)}>Rem</div>
                <p>{getCart(elem._id)}</p>
                <div onClick={() => increaseQuantity(elem._id)}>Add</div>
              </div>
            ) : (
              <div className="button" onClick={() => addToCart(elem)}>
                <Button colorScheme="blue">Add to Cart</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
