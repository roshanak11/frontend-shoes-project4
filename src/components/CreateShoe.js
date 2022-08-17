import React, { useState } from "react"
// // ! Importing all shoe categories, and react-select.
// import Select from 'react-select'
// import shoeCategories from '../data/shoeCategories'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { baseUrl } from '../config'

function CreateShoe() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    in_stock: '',
    categories: [],
  })

  function handleChange(event) {
    setFormData({ 
      ...formData, 
      [event.target.name]: event.target.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    const newFormData = {
      ...formData,
      // categories: formData.categories.map(category => category.value),
    }

    try {
      const { data } = await axios.post(`/${baseUrl}/shoes`, newFormData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log(data._id)
      navigate(`/shoes/${data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* // ! Me Being Extremely Fancy 🤪: */}
          {['name', 'image', 'description', 'price', 'in_stock'].map(field => {
            return <div key={field} className="field">
              <label className="label">
                {field[0].toUpperCase() + field.slice(1)}
              </label>
              <div className="control">
                <input
                  className="input"
                  category="text"
                  value={formData[field]}
                  onChange={handleChange}
                  name={field}
                />
              </div>
            </div>
          })}
          {/* <label className="label">
            {'Categories'}
          </label>
          <Select
            defaultValue={[]}
            isMulti
            name="colors"
            options={shoeCategories}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(categories) => setFormData({ ...formData, categories })}
            value={formData.categories}
          /> */}
          <button className="button mt-5 is-success">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default CreateShoe
