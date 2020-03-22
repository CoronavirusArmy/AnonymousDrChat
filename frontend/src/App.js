import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import "./css/App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";

function App(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  function handleLogout() {
    userHasAuthenticated(false);
    localStorage.clear()
  }

  useEffect(() => {
    onLoad();
  }, []);
  async function onLoad() {
      let token = localStorage.getItem('accessToken')
      if (token) userHasAuthenticated(true);
      setIsAuthenticating(false);
  }

  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Anonymous Dr Chat</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {isAuthenticated
                ? <NavItem onClick={handleLogout}>Logout</NavItem>
                : <>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
}

export default App;