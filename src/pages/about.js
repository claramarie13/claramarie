import React from 'react'
import DCPerson from '../components/DCPerson'
import {
  Container,
  Img,
  Section,
  StyledFlex as Flex,
} from '../styled-components'
import { Box } from 'grid-styled'

import img03 from '../img/1200/03.jpg'
import imgDrUlrichAnders from '../img/0400/DrUlrichAnders.jpg'

const AboutPage = () => (
  <Container>
    <Section>
      <Img src={img03} alt="" />
      <h2>About</h2>
      <p>This page was constructed by...</p>
      <Flex>
        <Box width={[1 / 2, 1 / 4]}>
          <DCPerson person="Dr. Ulrich Anders" img={imgDrUlrichAnders} />
        </Box>
      </Flex>
    </Section>
  </Container>
)

export default AboutPage
