import React from 'react'
import {
  Footer,
  FooterSection,
  StyledLink as Link,
} from '../../styled-components'

const DCFooter = props => (
  <Footer>
    <FooterSection>
      <p>&copy; Dr. Ulrich Anders</p>
      <div>
        <Link to="/imprint">Imprint</Link>
        <br /> Version {props.version}
        <br /> Revision {props.date}
      </div>
    </FooterSection>
  </Footer>
)

export default DCFooter
