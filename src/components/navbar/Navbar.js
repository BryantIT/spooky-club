import React from "react"
import { Row, Header, Logo, NavWrap, MainNav } from './Styles'
import { Link } from "react-router-dom"
import logo from '../../assests/images/logo.png'

const Navbar = () => {
  return (
    <Header>
      <Row>
        <Logo>
          <Link to='/'><img src={logo} /></Link>
        </Logo>

        <NavWrap>
          <MainNav>
            <li>
              <a className="smoothscroll" href="#intro" title="">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#process" title="">
                Process
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#features" title="">
                Features
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#pricing" title="">
                Pricing
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#faq" title="">
                FAQ
              </a>
            </li>
            <li className="highlight with-sep">
              <a href="#" title="">
                Sign Up
              </a>
            </li>
          </MainNav>
        </NavWrap>

        <a className="menu-toggle" href="#">
          <span>Menu</span>
        </a>
      </Row>
    </Header>
  )
}

export default Navbar
