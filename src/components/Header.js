import React from 'react'

export const Header = (props) => {
  const style ={
    backgroundColor:"#333",
    color:"#fff",
  }
    return (
    <div style={style}>
        
        <h1>Header</h1>
        <h3>{props.uname}</h3>    
     </div>
  )
}
