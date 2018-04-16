import React from 'react'

import {
  Header,
  HeaderSection,
  LogoBrand,
  LogoText,
  Nav,
  NavItem,
  StyledLink as Link,
} from '../../styled-components'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBook from '@fortawesome/fontawesome-free-solid/faBook'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faQuestionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle'
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle'
import faGem from '@fortawesome/fontawesome-free-solid/faGem'

const DCHeader = () => (
  <Header>
    <HeaderSection>
      <Link to="/">
        <LogoBrand>
          <FontAwesomeIcon icon={faCoffee} size="1x" /> TRY ME
        </LogoBrand>
      </Link>
      <Nav>
        <Link to="/">
          <NavItem>
            <FontAwesomeIcon icon={faBook} size="1x" /> Home
          </NavItem>
        </Link>{' '}
        <Link to="/cheatsheets">
          <NavItem>
            <FontAwesomeIcon icon={faInfoCircle} size="1x" /> Cheat Sheets
          </NavItem>
        </Link>{' '}
        <Link to="/blogs">
          <NavItem>
            <FontAwesomeIcon icon={faQuestionCircle} size="1x" /> Blogs
          </NavItem>
        </Link>{' '}
        <Link to="/about">
          <NavItem>
            <FontAwesomeIcon icon={faCoffee} size="1x" /> About
          </NavItem>
        </Link>
      </Nav>
    </HeaderSection>
  </Header>
)

export default DCHeader
