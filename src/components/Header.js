import React from 'react'

export const Header = (props) => {
  const style = {
    backgroundColor: "#333",
    color: "#fff",
  }
  return (
    <div >

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Aeries Weather Updates</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      
    </ul>
    
      <button class="btn btn-outline-success my-2 my-sm-0" type="">Click For Dark Mode</button>
   
  </div>
</nav>
    </div>
  )
}
