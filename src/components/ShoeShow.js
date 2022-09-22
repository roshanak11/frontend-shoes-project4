import React from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
// import { isCreator, getLoggedInUserId } from '../lib/auth'
import { getLoggedInUserId } from '../lib/auth'
import axios from 'axios'
import { baseUrl } from '../config'


function ShoeShow() {
  const [shoe, setShoe] = React.useState(undefined)
  // ! useState for reviews
  const [reviewContent, setReviewContent] = React.useState('')
  const { shoeId } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    fetch(`${baseUrl}/shoes/${shoeId}`)
      .then(resp => resp.json())
      .then(data => setShoe(data))
  }, [shoeId])

  async function handleDelete() {
    try {
      await axios.delete(`${baseUrl}/shoes/${shoe.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      navigate(`/shoes/`)
    } catch (e) {
      console.log(e)
    }
  }

  console.log(shoe)
  console.log(getLoggedInUserId())

  async function handleReview() {
    try {
      const { data } = await axios.post(
        `${baseUrl}/shoes/${shoe.id}/reviews`,
        { content: reviewContent },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      setShoe(data)
      navigate(`/shoes`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section className="section">
      <div className="container">
        {shoe ? (
          <div>
            <h2 className="title has-text-centered">{shoe.name}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={shoe.image} alt={shoe.name} />
                </figure>
                {(shoe.id) && <button
                  className="button is-danger"
                  onClick={handleDelete}
                >
                  ☠️ Delete Shoe
                </button>}
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="plate">
                  </span>{" "}
                  In Stock
                </h4>
                <p>{shoe.in_stock}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                  </span>{" "}
                  {"£" + shoe.price}
                </h4>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="wave">
                  </span>{" "}
                  Description
                </h4>
                <p>{shoe.description}</p>
                {
                  // ! Show reviews (lots of bulma)
                }
                <br />
                {shoe.reviews && shoe.reviews.map(review => {
                  return <article key={review.id} className="media">
                    <div className="media-content">
                      <div className="content">
                        <p className="subtitle">
                          {review.createdAt}
                        </p>
                        <p className="subtitle">
                          {review.user.username}
                        </p>
                        <p>{review.content}</p>
                      </div>
                      {/* {isCreator(review.user.id) && <button
                        className="button is-danger"
                        onClick={handleDelete}
                      >
                        ☠️ Delete Review
                      </button>} */}
                    </div>
                  </article>
                })}

                {
                  // ! Little form to POST a reviews (again lots of bulma)
                }
                {getLoggedInUserId() && <article className="media">
                  <div className="media-content">
                    <div className="field">
                      <p className="control">
                        <textarea
                          className="textarea"
                          placeholder="Add a review"
                          // ! Set the review's content to be what's in the input textarea.
                          onChange={(event) => setReviewContent(event.target.value)}
                        >
                        </textarea>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control">
                        <button
                          className="button is-info"
                          onClick={handleReview}
                        >
                          Submit
                        </button>
                      </p>
                    </div>
                  </div>
                </article>}
              </div>
            </div>
          </div>
        ) : (
          <p>...loading</p>
        )}
        <p id="back"><Link to="/shoes">{"⬅ Back"}</Link></p>
      </div>
    </section>
  )
}

export default ShoeShow