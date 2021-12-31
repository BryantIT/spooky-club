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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/page'>Page</Link>
            </li>
            <li>
              <Link to='signup'>| Sign Up</Link>
            </li>
          </MainNav>
        </NavWrap>
      </Row>
    </Header>
  )
}

export default Navbar
