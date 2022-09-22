
import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../config'

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

  return (
    <div className="section">
      <h1 className="title">Shoes</h1>
      <div className="columns is-multiline is-mobile">
        {shoe.map(shoe => {
          return (
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
          )
        })}
      </div>
    </div>
  )
}

export default ShoeIndex

