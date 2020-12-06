import React, { Fragment } from "react";
import "../styles/styles.scss";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { MDBContainer, MDBRating } from 'mdbreact';

const CheckOutInfo = props => {
    return(
        <div><h1 className="checkoutinfo-price" >Lps. 80/Dia</h1>
        <h3 className="checkoutinfo-title">Descripcion</h3>
        <p className="checkoutinfo-paragraph">SU SISTEMA ALGEBRAICO COMPUTACIONAL (CAS) PERMITEINVESTIGAR LAS MATEMATICAS Y 
        CIENCIAS UTILIZANDONOTACION ALGEBRAICA, GRAFICOS, TABLAS, MATRICES YOTROS RECURSOSTRABAJE CON ECUACIONES DIFERENCIALES, 
        GRAFICASCON COORDENADAS CARTESIANAS, POLARES Y PARAMETRI-CAS, ROTACION DE SUPERFICIES (GRAFICAS DE 3D),NUMEROS COMPLEJOS, 
        MATRICES, CONSTANTES FISICAS,CONVERSION DE UNIDADES, REGRESIONES, PROGRAMACIONY MUCHO MAS.</p>

        <h3 className="checkoutinfo-title">Reglas</h3>
        <p className="checkoutinfo-paragraph">NO DESARMAR</p>

        <Button className="button-input" variant="warning">Alquilar</Button>
        {/* <MDBContainer>
        <MDBRating iconRegular />
      </MDBContainer> */}
      </div>
    );
}

export default CheckOutInfo;