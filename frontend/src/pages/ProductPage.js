import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:4000/${id}`);
      const json = await response.json();

      if (response.ok) {
        setProduct(json);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="Productpage">
      {product &&
        (
          <div key={product._id} className="productpage-item">
            <img
              src={`data:image/png;base64,${product.img}`}
              alt={product.title}
              className="product-page-image"
            />
            <h1 className="product-page-title">{product.title}</h1>
            <p className="product-page-price">AED {product.price}</p>
            <p className="product-page-description">{product.description}</p>
          </div>
        )}
    </div>
  );
};

export default ProductPage;
