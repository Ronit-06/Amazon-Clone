import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

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

    const deleteCartitem = async (id) => {
      const response = await fetch(`http://localhost:4000/${id}`);

      if (response.ok) {
        const deleteitem = await fetch(`http://localhost:4000/${id}`, {
          method: "DELETE"
        });
        console.log("Deleted item");
        window.location.reload();
        };
    }

  return (
    <div className="cartpage">
      <div className="cartproducts">
        {cartItems &&
          cartItems.map((cart) => (
            <div key={cart._id} className="cart-item">
              <Link
                to={`/cart/${cart._id}`}
                key={cart._id}
                className="cart-link"
              >
                <img
                  src={`data:image/png;base64,${cart.img}`}
                  alt={cart.title}
                  className="cart-image"
                />
                <p className="cart-title">{cart.title}</p>
                <p className="cart-price">AED {cart.price}</p>
              </Link>

              <button className="cart-delete" onClick={() => deleteCartitem(cart._id)}>
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartPage;
