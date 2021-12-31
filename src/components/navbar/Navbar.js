import React from "react"
import {
  Row,
  Header,
  Logo,
  NavWrap,
  MainNav,
  StyledLink,
  SignUpLink
 } from './Styles'
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
              <StyledLink to='/' activeClassName='active'>Home</StyledLink>
            </li>
            <li>
              <StyledLink to='/page' activeClassName='active'>Page</StyledLink>
            </li>
            <li>|</li>
            <li>
              <SignUpLink to='signup' activeClassName='active'>Sign Up</SignUpLink>
            </li>
          </MainNav>
        </NavWrap>
      </Row>
    </Header>
  )
}

export default Navbar
