
// import React runs react
import React from "react"
import { Link, useLocation } from "react-router-dom"

function ShoeShow() {
  const location = useLocation()
  const shoe = location.state.shoe
  return <section className="section">
    <div className="container">
      <h2 key={shoe.name}>{shoe.name}</h2>
      <h3>£{shoe.price}</h3>
      <h3>£{shoe.in_stock}</h3>
      <h3>£{shoe.description}</h3>
      <img src={shoe.image} alt={shoe.name} />
      <p id="back"><Link to="/shoes">{"⬅ Back"}</Link></p>
    </div>
  </section>
}

export default ShoeShow