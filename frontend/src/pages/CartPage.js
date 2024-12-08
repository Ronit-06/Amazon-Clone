import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
//   const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetch("http://localhost:4000/cart");
      const data = await response.json();

      if (response.ok) {
        setCartItems(data);
      }
    };
    fetchCartItems();
  }, []);

    return(
    <div className="cartpage">
      <div className="cartproducts">
        {cartItems &&
          cartItems.map((cart) => (
            <Link
              to={`/cart/${cart._id}`}
              key={cart._id}
              className="cart-link"
            >
              <div key={cart._id} className="cart-item">
                <img
                  src={`data:image/png;base64,${cart.img}`}
                  alt={cart.title}
                  className="cart-image"
                />
                <p className="cart-title">{cart.title}</p>
                <p className="cart-price">AED {cart.price}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
    )

}



export default CartPage;