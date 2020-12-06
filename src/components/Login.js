import React from "react";
import "../styles/styles.scss";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import HANDYLOGO from "./HANDYLOGO.png";
import { Link } from 'react-router-dom';

const Login = props => {
    return (
        <div>
            <img className="login-logo" src={HANDYLOGO}></img>

            <div className="container-login">
                <h6 className="forgotlogin" >¿Olvidaste Tu Contraseña?</h6>
            </div>
            <div>
                <InputGroup className="input-gourp-login ">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="color-inputgroup-login" id="inputGroup-sizing-default">Usuario</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="color-inputgroup-login"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="input-gourp-login ">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="color-inputgroup-login" id="inputGroup-sizing-default">Contraseña</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="color-inputgroup-login"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
            </div>
            
            <Link to="/">
                <Button className="button-login" variant="warning">Ingresar</Button>
            </Link>
                   
            <Button className="button-login-socialmedia" variant="warning">Ingrese con sus redes sociales</Button>
            <div className="container-login">
                <h6 className="login-copyright" >© 2020 Handy</h6>
            </div>
        </div>
    );
};

export default Login;
