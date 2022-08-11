
import React from 'react'
import { Link } from 'react-router-dom'

function ShoeIndex() {
  const [shoe, setShoe] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/shoes')
      const json = await res.json()
      setShoe(json)
    }
    getData()
  }, [])

  return (
    <div className="section">
      <h1 className="title">Shoe Index</h1>
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

