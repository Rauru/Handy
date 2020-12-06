import React from "react";
import "../styles/styles.scss";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import HandyTextLogo from "./HANDYTEXTOLOGO.png";
import { Link } from "react-router-dom";
 
const HeaderModal = () => {
  return <div>Some Text</div>;
};

const Header = props => {
  return (
    <div className="Header">
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand className="navbar-brand" href="/">
          <Link to="/">
            <img className="handylogotext" src={HandyTextLogo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl
              classname="form-control"
              type="text"
              placeholder="Busqueda"
            />
            <Button className="navbar-button" variant="warning">
              Busqueda
            </Button>
          </Form>
          <Form inline>
            <Link to="/login">
              <Button className="navbar-button" variant="warning">Ingresar</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Header.defaultProps = {
  title: "Handy",
  subtitle: "at hand"
};

export default Header;
