import { useEffect, useState } from "react"

const Home = () => {
  const [products, setProducts] = useState(null)

  useEffect(()=>{
    const fetchProduct = async () =>{
      const response = await fetch("http://localhost:4000/")
      const json = await response.json()

      if(response.ok){
        setProducts(json)
      }
    }

    fetchProduct()
  },[])

  return (
    <div className="home">
      <div className="Products">
        {products && products.map((product)=>(
          <div key={product._id} className="product-item">
            <img src={`data:image/png;base64,${product.img}`} alt={product.title} className="product-image" />
            <p>{product.title}, {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home