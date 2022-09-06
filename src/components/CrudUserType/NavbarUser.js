import React from 'react'
import { Link } from 'react-router-dom'
export const NavbarUser = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">HappyPlaces</a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/userType">AddUserType</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="/viewUser">View UserType</Link>
                        </li>
                        </ul>
                </div>
            </nav>    
    </div>
  )
}
