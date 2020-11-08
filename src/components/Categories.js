import React from "react";
import Button from "react-bootstrap/Button";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const gridExamplesPage = () => {
  return (
    <div>
        <MDBContainer className="container">
        <MDBRow>
            <MDBCol><Button className="button button-tecnologia">Tecnologia</Button></MDBCol>
            <MDBCol><Button className="button button-arteymusica">Arte y Musica</Button></MDBCol>
            <MDBCol><Button className="button button-repuestos">Repuestos</Button></MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol><Button className="button button-industrial">Industrial</Button></MDBCol>
            <MDBCol><Button className="button button-domestico">Domestico</Button></MDBCol>
            <MDBCol><Button className="button button-audiovisual">Audiovisual</Button></MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol><Button className="button button-educacion">Educacion</Button></MDBCol>
            <MDBCol><Button className="button button-recreacion">Recreacion</Button></MDBCol>
            <MDBCol><Button className="button button-mecanica">Mecanica</Button></MDBCol>
        </MDBRow>
        </MDBContainer>
    </div>
  );
}

export default gridExamplesPage;