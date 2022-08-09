
import React from 'react'

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
      <div className="container">
        {shoe.map(shoe => <h2 key={shoe._id}>{shoe.name}</h2>)}
      </div>
    </div>
  )
}

export default ShoeIndex

