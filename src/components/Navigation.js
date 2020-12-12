import React from 'react'
import {
  Nav,
  NavItem,
  NavLink as NavLinkBootstrap,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { MdHome, MdLock, MdQuestionAnswer } from 'react-icons/md'

export default function Navigation() {
  return (
    <div className="flex-grow-1">
      <Nav vertical className="mb-3">
        <NavItem>
          <NavLinkBootstrap tag={NavLink} to="/dashboard">
            <MdHome className="mb-1 mr-2" />
            Dashboard
          </NavLinkBootstrap>
        </NavItem>
        <NavItem>
          <NavLinkBootstrap tag={NavLink} to="/sessions">
            <MdLock className="mr-2" />
            Sessions
          </NavLinkBootstrap>
        </NavItem>
        <NavItem>
          <NavLinkBootstrap tag={NavLink} to="/faq">
            <MdQuestionAnswer className="mr-2" />
            FAQ
          </NavLinkBootstrap>
        </NavItem>
      </Nav>
    </div>
  )
}
