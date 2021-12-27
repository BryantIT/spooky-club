import styled from 'styled-components'

export const Row = styled.div`
  width: 94%;
  max-width: 1140px;
  margin: 0 auto;

  &:before, &:after {
  	content: "";
  	display: table;
  }
  &:after {
  	clear: both;
  }
  &.row {
  	width: auto;
  	max-width: none;
  	margin-left: -20px;
  	margin-right: -20px;
  }

  @media screen and (max-width:1024px) {
  	&.row &.row {
  		margin-left: -18px;
  		margin-right: -18px;
  	}
  	[class*="col-"] {
  		padding: 0 18px;
  	}
  }

  @media screen and (max-width:768px) {
  	&.row {
  		width: auto;
  		padding-left: 30px;
  		padding-right: 30px;
  	}
  	&.row &.row {
  		padding-left: 0;
  		padding-right: 0;
  		margin-left: -15px;
  		margin-right: -15px;
  	}
  }

  @media screen and (max-width:600px) {
  	&.row {
  		padding-left: 25px;
  		padding-right: 25px;
  	}
  	&.row &.row {
  		margin-left: -10px;
  		margin-right: -10px;
  	}
  }

  @media screen and (max-width:400px) {
  	&.row {
  		padding-left: 30px;
  		padding-right: 30px;
  	}
  	&.row &.row {
  		padding-left: 0;
  		padding-right: 0;
  		margin-left: 0;
  		margin-right: 0;
  	}
  }
`

export const Header = styled.header`
  width: 100%;
  position: absolute;
  left: 0;
  top: 24px;
  z-index: 600;
  background: transparent;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;


  &.row {
  	width: auto;
  	height: 66px;
  	position: relative;
  }

  @media only screen and (max-width:768px) {
  		top: 0;
  		padding: 6px 0;
  	&.logo a {
  		width: 38px;
  		height: 38px;
  		background-size: 38px 38px;
  	}
  }
`

export const Logo = styled.div`
  width: 80px;
  height: 80px;
  background-size: 38px 38px;
  position:fixed;
	top:0;
	left:0;
`

export const NavWrap = styled.nav`
  font-family: "raleway-heavy", sans-serif;
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: absolute;
  top: 0;
  right: 30px;
  margin: 0;
	padding: 0;

  @media only screen and (max-width:768px) {
  	display: block;
  	width: 100%;
  	position: absolute;
  	top: 69px;
  	right: 0;
  }

  @media only screen and (min-width:769px) {
  	display: block !important;
  }
`
