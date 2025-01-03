import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("http://localhost:4000/");
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="home">
      <div className="Products">
        {products &&
          products.map((product) => (
            <Link
              to={`/${product._id}`}
              key={product._id}
              className="product-link"
            >
              <div key={product._id} className="product-item">
                <img
                  src={`data:image/png;base64,${product.img}`}
                  alt={product.title}
                  className="product-image"
                />
                <p className="product-title">{product.title}</p>
                <p className="product-price">AED {product.price}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
