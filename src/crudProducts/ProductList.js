import React from 'react'

export const ProductList = (props) => {
  
  
  return (
    <div>
      <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Pid</th>
                        <th scope="col">Pname</th>
                        <th scope="col">Pprice</th>
                        <th scope="col">PQuantity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product) => {
                        return (
                            <tr>
                                <th scope='row'>{product.Pid}</th>
                                <td>{product.Pname}</td>
                                <td>{product.Pprice}</td>
                                <td>{product.Pquantity}</td>
                                <td>{product.isActive ? "Active" : "Not Active"}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>{props.deleteProduct(product)}}>DELETE</button>
                                </td>
                            </tr> 
                        );
                    })}

                </tbody>
            </table>
    </div>
  )
}
