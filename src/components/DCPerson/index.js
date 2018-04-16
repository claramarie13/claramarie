import React from 'react'

import {
  Header,
  HeaderSection,
  LogoText,
  Nav,
  NavItem,
  ImgPerson,
  StyledLink as Link,
  ImgCaption,
} from '../../styled-components'

const DCPerson = props => (
  <div>
    <ImgPerson src={props.img} />
    <ImgCaption>{props.person}</ImgCaption>
  </div>
)

export default DCPerson
