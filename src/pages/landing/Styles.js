import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const IntroSection = styled.section`
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 720px;
  display: table;
  position: relative;
`

export const ShadowOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.25) 25%, transparent 56%);  /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.25) 25%, transparent 56%);  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.25) 25%, transparent 56%);  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#73000000', endColorstr='#00000000', GradientType=0);  /* IE6-9 */
`

export const Content = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  -webkit-transform: translateY(-1.2rem);
  -ms-transform: translateY(-1.2rem);
  transform: translateY(-1.2rem);
  h1 {
    color: #FFFFFF;
  	font-family: "merriweather-bold", serif;
  	font-size: 5.4rem;
  	line-height: 1.334;
  	max-width: 800px;
  	margin-left: auto;
  	margin-right: auto;
  }
  h5 {
    color: rgba(255, 255, 255, 0.6);
  	font-family: "raleway-heavy", sans-serif;
  	font-size: 1.8rem;
  	line-height: 1.667;
  	margin-bottom: 0.6rem;
  	text-transform: uppercase;
  	letter-spacing: .25rem;
  }
`
export const ButtonLink = styled(Link)`
  border-radius: 10%;
  font-size: 1.5rem;
  padding: 1rem 3rem;
  color: #f4f4f4;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid #d4af37;
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 1px 1px 25px 10px rgba(92, 92, 92, 0.4);
  }
`

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

export const Col12 = styled.div`
  width: 100%;
`
