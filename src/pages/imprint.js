import React from 'react'
import {
  Container,
  Img,
  Section,
  StyledFlex as Flex,
} from '../styled-components'
import { Box } from 'grid-styled'

const ImprintPage = () => (
  <Container>
    <Section>
      <h2>Imprint</h2>
      <h3>Responsible</h3>
      <p>
        Dr. Ulrich Anders<br />
        Cologne Business School
      </p>
      <h3>Credits</h3>
      <p>
        Fotos from <a href="https://unsplash.com/">Unsplash</a>. Thanks to:
      </p>
      <ul>
        <li>Alex Kotliarsyi</li>
        <li>Álvaro Serrano</li>
        <li>Clint Adair</li>
        <li>Dmitry Ratshny</li>
        <li>Guillaume Bolduc</li>
        <li>Jakob Owens</li>
        <li>Jason-Blackeye</li>
        <li>Jason Leung</li>
        <li>Krystian Tambur</li>
        <li>Michael Mrozek</li>
        <li>Nicolas Green</li>
        <li>Olga Guryanova</li>
        <li>Samuel Zeller</li>
        <li>William Bout</li>
        <li>Jacek Dylag</li>
      </ul>

      <p />
    </Section>
  </Container>
)

export default ImprintPage
