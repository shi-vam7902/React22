import React from 'react'

export const HeaderEmployee = () => {
    return (
        <div>
           <h1>
            Employee's Update Sheet
           </h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Royal Tecnosoft Private Limited</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">AddEmployee <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Remove From List</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Update All Employee</a>
                        </li>
                        
                        <li class="nav-item active">
                            <a class="nav-link" href="#">View All Employee</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>
        </div>
    )
}
