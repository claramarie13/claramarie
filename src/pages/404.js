import React from 'react'
import { Container, Img, Section } from '../styled-components'

import img06 from '../img/1200/06.jpg'

const NotFoundPage = () => (
  <Container>
    <Section>
      <Img src={img06} alt="" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Container>
)

export default NotFoundPage
