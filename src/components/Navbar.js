import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/aboutus">About Us </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contactus">Contact Us</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link " to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to="/contactdetails/101">Contact Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link " to="/products">Products</Link>
                        </li>
                    </ul>

                </div>
            </nav>

        </div>
    )
}
