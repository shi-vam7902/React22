import React from 'react'
import { Link } from 'react-router-dom'
var products = [
    {
        id: 1,
        name: "Ipad"
    },
    {
        id: 2,
        name: "I Phone"
    },
    {
        id: 3,
        name: "Nothing 23es"
    }
]
export const Products = () => {

    return (
        <div>

            {
                products.map(product=>{
                    return(
                        <ul>
                            <li><Link to={`/product/${product.id}`}>Product id</Link></li>
                            <li><Link to={`/product/${product.name}`}>Product Name</Link></li>
                        </ul>
                    )
                })
            }
           
        </div>
    )
}
