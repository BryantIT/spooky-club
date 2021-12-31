import React from "react"
import {
  IntroSection,
  ShadowOverlay,
  Content,
  ButtonLink,
  Row,
  Col12
} from "./Styles"

const Landing = () => {
  return (
    <IntroSection>
      <ShadowOverlay />
      <Content>
        <Row>
          <Col12>
            <h5>Hello and welcome to</h5>
            <h1>The Myst and Orb Society</h1>
            <ButtonLink to="/about">
              <span>Learn More</span>
            </ButtonLink>
          </Col12>
        </Row>
      </Content>
    </IntroSection>
  )
}

export default Landing
