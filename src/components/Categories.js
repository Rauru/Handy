import React from "react";
import Button from "react-bootstrap/Button";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom';

const gridExamplesPage = () => {
  return (
    <div>
        <MDBContainer className="container">
        <MDBRow>
            <MDBCol><Link to="/purchase"><Button className="button button-tecnologia">Tecnologia</Button></Link></MDBCol>
            <MDBCol><Link to="/purchase"><Button className="button button-arteymusica">Arte y Musica</Button></Link></MDBCol>
            <MDBCol><Link to="/purchase"><Button className="button button-repuestos">Repuestos</Button></Link></MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol><Link to="/purchase"><Button className="button button-industrial">Industrial</Button></Link></MDBCol>
            <MDBCol><Link to="/purchase"><Button className="button button-domestico">Domestico</Button></Link></MDBCol>
            <MDBCol><Link to="/purchase"><Button className="button button-audiovisual">Audiovisual</Button></Link></MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol><Link to="/purchase"><Button className="button button-educacion">Educacion</Button></Link></MDBCol>
            <MDBCol><Link to="/purchase"><Button className="button button-recreacion">Recreacion</Button></Link></MDBCol>
            <MDBCol><Link to="/purchase"><Button className="button button-mecanica">Mecanica</Button></Link></MDBCol>
        </MDBRow>
        </MDBContainer>
    </div>
  );
}

export default gridExamplesPage;