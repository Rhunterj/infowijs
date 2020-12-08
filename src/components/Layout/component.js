import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Col,
  Container,
  NavbarBrand,
  Row,
} from 'reactstrap'
import infowijsLogo from '../../images/infowijs-white.svg'
import Navigation from '../Navigation'

function Layout({ children, signOut }) {
  return (
    <div>
      <Container fluid className="page">
        <Row>
          <Col className="page-navigation px-0 d-flex flex-column vh-100 sticky-top px-3">
            <NavbarBrand className="mx-3 my-4">
              <img src={infowijsLogo} alt="Infowijs" width={100} />
            </NavbarBrand>
            <Navigation />
            <div className="page-navigation-profile my-4">
              <Button outline color="light" onClick={() => signOut()} className="full">Log out</Button>
            </div>
          </Col>
          <Col className="page-wrapper">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
  ]),
}

Layout.defaultProps = {
  children: null,
}

export default Layout
