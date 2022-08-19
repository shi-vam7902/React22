import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
  
    var id = useParams().id;
  
    return (
    <div>
        <h1> Product Details {id}
        </h1>
    </div>
  )
}
