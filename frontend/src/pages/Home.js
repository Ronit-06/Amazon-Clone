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
          <p key={product._id}>{product.title}, {product.price}</p>
        ))}
      </div>
    </div>
  )
}

export default Home