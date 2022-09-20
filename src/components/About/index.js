// Write your code here
import './index.css'
import Header from '../Header'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-small"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-large"
      />
    </div>
  </div>
)

export default About
