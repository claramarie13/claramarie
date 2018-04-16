import styled from 'styled-components'
import Link from 'gatsby-link'
import { Flex } from 'grid-styled'

export const Article = styled.article`
  margin: 1.5rem 0;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-height: 600px;
  padding: 0;
`

export const Footer = styled.footer`
  background: #8f8978;
  height: 600px;
  padding: 27px 0;
`

export const FooterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 0.5rem;
  }
`

export const H2 = styled.h2`
  margin-bottom: 0;
`

export const Header = styled.header`
  background: #8f8978;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
  @media (min-width: 48em) {
    padding: 1.5rem 0;
  }
`

export const HeaderSection = styled.section`
  /* font-size: 1rem; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 0.5rem;
}
`

export const Hr = styled.hr`
  margin-bottom: 3rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`

export const Img = styled.img`
  margin-bottom: 0;
  max-width: 100%;
`

export const ImgPerson = styled.img`
  border-radius: 50%;
  border: solid 3px #eee;
  margin-bottom: 0;
  max-width: 100%;
`

export const ImgCaption = styled.div`
  text-align: center;
`

export const LogoBrand = styled.span`
  color: #fff;
  font-family: 'Roboto';
  font-size: 2.3888889rem;
  line-height: 3rem;
  text-decoration: none;
`

export const LogoText = styled.span`
  color: #fff;
  font-size: 1.7777778rem;
  line-height: 3rem;
  line-height: 3rem;
  text-decoration: none;
`

export const Nav = styled.nav`
  align-self: baseline;
`

export const NavItem = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  white-space: nowrap;
`

export const Section = styled.section`
  margin-bottom: 3rem;
  padding: 0 0.5rem;
  }
`

export const StyledLink = styled(Link)`
  color: #fff;
  align-self: baseline;
`

export const StyledFlex = styled(Flex)`
  flex-wrap: wrap;
`
