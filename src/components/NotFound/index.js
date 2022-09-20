// Write your code here
import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div className="notfound-container">
    <Header />
    <div className="not-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="head">Lost your way?</h1>
      <p className="description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
