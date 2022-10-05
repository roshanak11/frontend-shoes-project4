import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../config'

export default function Register() {
  // ! Using react router to navigate
  const navigate = useNavigate()
  // ! Put form fields in state.
  const [formData, setFormData] = React.useState({
    username: 'rosh',
    email: 'rosh@rosh.com',
    password: 'rosh123',
  })

  // !Errors
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  function handleChange(e) {
    // ! name: The field I've typed in, e.g. username/email/password.
    // ! value: the text that's in that field.
    // console.log(e)
    const { name, value } = e.target // ! This will get the name and value out of the event object. The name is the 'username' (example) and value is whatever's in the input.
    setFormData({
      ...formData, // ! This is whatever the form data was before, all its fields.
      [name]: value,
    })
    setErrors({
      ...errors,
      [name]: '',
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { data } = await axios.post(`${baseUrl}/register`, formData) //*axios is an interface over the fetch api, it gives you back a response object with data inside it.
      console.log(data)
      // ! Navigate to the /login page.
      navigate('/login')
      alert("Registration successful")

    } catch (error) {
      // ! Print out the response form the backend if there's an error
      console.log(error.response.data)
      setErrors(error.response.data.errors)
      alert("Registration error")
    }
  }

  console.log(formData)


  return <div className="section">
    <h1 className="title has-text-centered">Register</h1>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'username'}
              // ! Adding these 2 fields means your component is 'controlled.'
              value={formData.username}
              onChange={handleChange}
            />
            {/* // ! Really nice custom error message */}
            {errors.username && <small className="has-text-danger">{errors.username}</small>}
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'email'}
              // ! Adding these 2 fields means your component is 'controlled.'
              value={formData.email}
              onChange={handleChange}
            />
            {/* // ! Really nice custom error message */}
            {errors.email && <small className="has-text-danger">{errors.username}</small>}
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name={'password'}
              // ! Adding these 2 fields means my component is 'controlled.'
              value={formData.password}
              onChange={handleChange}
            />
            {/* // ! Really nice custom error message */}
            {errors.password && <small className="has-text-danger">{errors.username}</small>}
          </div>
        </div>
        {/* // ! When the user clicks Register, it will POST to my /api/register on the backend. Then I'll get a response from the API that responds with the new user. */}
        <button className="button">Submit</button>
      </form>
    </div>
  </div>
}