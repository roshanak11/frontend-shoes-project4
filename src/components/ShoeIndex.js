
import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../config'

// Fetch all the shoes with the API I built
function ShoeIndex() {
  const [shoe, setShoe] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseUrl}/shoes`)
      const json = await res.json()
      setShoe(json)
    }
    getData()
  }, [])

  // Map all the shoes onto the page
  return (
    <div className="section">
      <h1 className="title has-text-centered">Shoes</h1>
      <div className="columns is-multiline is-mobile">
        {shoe.map(shoe => {
          return (
            <div key={shoe} className="column is-one-quarter-desktop is-third-tablet is-half-mobile">
              <>
                <Link to={`/shoes/${shoe.id}`}>
                  <div className="card">
                    <div className="card-content">
                      <h2 key={shoe.name}>{shoe.name} | £{shoe.price}</h2>
                    </div>
                  </div>
                  <div className="card-image">
                    <figure className="image is-1by1">
                      <img src={shoe.image} alt={shoe.name} />
                    </figure>
                  </div>
                </Link>
              </>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ShoeIndex

