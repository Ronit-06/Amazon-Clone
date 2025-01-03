import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CartProductPage = () => {
  const { id } = useParams();
  const [cart, setCart] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCartItem = async () => {
      const response = await fetch(`http://localhost:4000/cart/${id}`);
      const json = await response.json();

      if (response.ok) {
        setCart(json);
      }
    };
    fetchCartItem();
    console.log(cart)
  }, [id]);

  const handleAddtoCart = async (id) => {
    const response = await fetch(`http://localhost:4000/${id}`);
    const json = await response.json();

    if (response.ok) {
      const addtoCart = await fetch(`http://localhost:4000/${id}`, {
        method: "POST",
        body: json,
      });
      console.log("Added to Cart");

      setMessage("Product added to cart!");

      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="cart-Product-page">
      {cart && (
        <div key={cart._id} className="cart-page-item">
          <img
            src={`data:image/png;base64,${cart.img}`}
            alt={cart.title}
            className="cart-page-image"
          />
          <h1 className="cart-page-title">{cart.title}</h1>
          <p className="cart-page-price">AED {cart.price}</p>
          <p className="cart-page-description">{cart.description}</p>
          <button
            className="add-to-cart-button"
            onClick={() => handleAddtoCart(id)}
          >
            Add to Cart
          </button>
          {message && (
            <div className="popup-message">
              <p>Product added to cart!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartProductPage;
