import React, { Fragment } from "react";
import "../styles/styles.scss";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { MDBBtn } from "mdbreact";


const InputGroupProduct = props => {
    return(
        <div>
            <InputGroup className="input-gourp-product">
                <InputGroup.Prepend>
                    <InputGroup.Text className="color-input-group" id="inputGroup-sizing-default">Titulo del Producto:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl className="color-input-group"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="input-gourp-product">
                <InputGroup.Prepend>
                    <InputGroup.Text className="color-input-group" id="inputGroup-sizing-default">Pecio por Dia:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl className="color-input-group"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="input-gourp-product">
                <InputGroup.Prepend>
                    <InputGroup.Text className="color-input-group" id="inputGroup-sizing-default">Categoria:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl className="color-input-group"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="input-gourp-product">
                <InputGroup.Prepend>
                    <InputGroup.Text className="color-input-group" id="inputGroup-sizing-default">Reglas:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl className="color-input-group"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="input-gourp-product">
                <InputGroup.Prepend>
                    <InputGroup.Text className="color-input-group" id="inputGroup-sizing-default">Descipcion:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl className="color-input-group textarea-input-group"
                    as="textarea"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <div>
            <Button className="button-input" variant="warning">Publicar</Button>
            {/* <Fragment>
                <MDBBtn className="button-input">Publicar</MDBBtn>
            </Fragment> */}
            </div>
        </div>
    );
}

export default InputGroupProduct;