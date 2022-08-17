
import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../config'

function ShoeIndex() {
  const [shoe, setShoe] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/${baseUrl}/shoes`)
      const json = await res.json()
      setShoe(json)
    }
    getData()
  }, [])

  return (
    <div className="section">
      <h1 className="title">Shoes</h1>
      <div className="columns is-multiline"> 
        {shoe.map(shoe => {
          return (
            <>
              <Link to={`/shoes/${shoe.id}`}>
                <h2 key={shoe.name}>{shoe.name}</h2>
                <h3>£{shoe.price}</h3>
                <img src={shoe.image} alt={shoe.name} />
              </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ShoeIndex

