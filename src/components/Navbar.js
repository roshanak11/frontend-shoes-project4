// Line below: import { Link } allows you to use link component for us to link all the components together inside the Navbar
import { Link } from "react-router-dom"
import React from "react"


// ! Link components added to navigation.
function Navbar() {

  return (
    <>
      {/* Lines below: Navbar is created in Header and has Home, Plants, Show Plant, Login, and Register tabs that link to the Home.js, PlantIndex.js, PlantShow.js, Login.js, and Register.js components. */}
      <header>
        {/* Lines below: "navbar is-dark", "container", "navbar-brand", "navbar-item" imports class names from bulma */}
        <nav>
          <div className="container">
            <div className="navbar-start">
              {/*Line below: Link to="/" creates default page as Home page */}
              <Link to="/" className="navbar-item">
                {/* Line below: Home tab */}
                <h2 className="navbar">Home</h2>
              </Link>
              <Link to="/shoes" className="navbar-item">
                {/* Line below: PlantIndex.js. tab */}
                <h2 className="navbar">Shoes</h2>
              </Link>
              <Link to="/login" className="navbar-item">
                {/* Line below: Login.js tab */}
                <h2 className="navbar">Login</h2>
              </Link>
              <Link to="/register" className="navbar-item">
                {/* Line below: Register.js tab */}
                <h2 className="navbar">Register</h2>
              </Link>
              <Link to='/new-shoe' className="navbar-item">
                <h2 className="navbar">Create Shoe</h2>
              </Link>
              <Link to='/search' className="navbar-item">
                <h2 className="navbar">Search</h2>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

// Line below: export Navbar so it can be used and imported in other .js files
export default Navbar
