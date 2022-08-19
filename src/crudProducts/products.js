import React from 'react'
import { ProductList } from './ProductList'
import {ProductForm} from './ProductForm'
export const products = (props) => {
  
  const deleteproduct = (pro)=>{
    deleteproduct = products.filter((product) => product.id !== pro.id);
    console.log(products)
    setproducts(products)
}
  const addProduct = (product)=>{
    console.log(product);
    products=[...products,product]
    setproducts(product)
    
}
  var [products,setproducts] = useState([]);
  return (
    <div>
      <ProductList  products={products} deleteProduct={deleteproduct}/>
      <ProductForm addProduct={addProduct} />
     </div>
  )
}
