import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = ({toggleShowMenu}) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          Advanced WS Client
          {/* <Link to="/">Advanced WS Client</Link> */}
        </Navbar.Brand>
      </Navbar.Header>
      {/* <Nav>
        <LinkContainer to="/courses">
          <NavItem eventKey={1}>Courses</NavItem>
        </LinkContainer>
      </Nav>*/}
      <Nav pullRight={true}>
        {/* <LinkContainer to="/create/course"> */}
        <NavItem eventKey={2}>
          <img onClick={toggleShowMenu} width="30" src="/app/static/img/burger.png" />
        </NavItem>
        {/* </LinkContainer> */}
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
