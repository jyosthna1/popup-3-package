// Write your code here
import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button className="menu" type="button" testid="hamburgerIconButton">
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="link-list-container">
              <li className="list-item">
                <Link className="nav-link" to="/" onClick={() => close()}>
                  <AiFillHome size="30" color="#616e7c" />
                  <h1 className="name">Home</h1>
                </Link>
              </li>
              <li className="list-item">
                <Link className="nav-link" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="30" color="#616e7c" />
                  <h1 className="name">About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
