import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          data="March 22, 2020"
          title="lorem ipsum dolor sit amet"
          excerpt="Lorem ipsum has become the industry standard for design mockups and prototypes. By adding a little bit of Latin to a mockup, you’re able to show clients a more complete version of your design without actually having to invest time and effort drafting copy."
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
