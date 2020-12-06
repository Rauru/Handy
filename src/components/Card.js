import React from "react";
import "../styles/styles.scss";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <div>
        <MDBContainer className="container">
        <MDBRow className="purchase-row">
            <MDBCol>
              <div class="card" className="card">
                <img class="card-img-top" className="images-card" src="https://www.officedepot.com.hn/medias/000003764T4.gif-1200ftw?context=bWFzdGVyfHJvb3R8NDc5MTZ8aW1hZ2UvZ2lmfGgzNy9oZjAvOTM1Mjc0NzMxOTMyNi5naWZ8OWRmNjYxNjM0OWM2YTBlN2I5MDVkMTRhYjVlNWFiNzQxZmMwZDg1Yjg0NTQzNTA1MjIyMTRhMmNkNDA0OWI4Mg" alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title" className="card-purchase-title">CALCULADOR TEXAS VOYAGE 200</h5>
                  <p class="card-text" className="card-purchase-body">L.200/Dia</p>
                </div>
                <Link to="/checkout">
                  <Button className="card-button" variant="warning">Ver Producto</Button>
                </Link>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div class="card" className="card">
                <img class="card-img-top" className="images-card" src="https://www.solocalculadoras.com/33-large_default/ti-nspire-cx-cas.jpg" alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title" className="card-purchase-title">TI Nspire CX CAS</h5>
                  <p class="card-text" className="card-purchase-body">L.150/Dia</p>
                </div>
                <Link to="/">
                  <Button className="card-button" variant="warning">Ver Producto</Button>
                </Link>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div class="card" className="card">
                <img class="card-img-top" className="images-card" src="https://www.raspberrypi.org/homepage-9df4b/static/90d7d8e3687e9ce4a322143ccca1b8a9/02f9f/rpf-products%252Ff532739a-171e-4aa0-b9f3-d05e20710b69_raspberry-pi-4-model-b.jpg" alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title" className="card-purchase-title">Raspberry Pi 4 Model B</h5>
                  <p class="card-text" className="card-purchase-body">L.300/Dia</p>
                </div>
                <Link to="/">
                  <Button className="card-button" variant="warning">Ver Producto</Button>
                </Link>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </MDBCol>
        </MDBRow>
        <MDBRow className="purchase-row">
            <MDBCol>
              <div class="card" className="card">
                <img class="card-img-top" className="images-card" src="https://www.raspberrypi.org/homepage-9df4b/static/eef5d5d91acb34be0d7443b02cece1d1/8924f/8c67a3e02f41441dae98f8b91c792c1e1b4afef1_770a5842.jpg" alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title" className="card-purchase-title">Raspberry Pi 3 Model B+</h5>
                  <p class="card-text" className="card-purchase-body">L.300/Dia</p>
                </div>
                <Link to="/">
                  <Button className="card-button" variant="warning">Ver Producto</Button>
                </Link>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div class="card" className="card">
                <img class="card-img-top" className="images-card" src="https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/A/0/A000057_featured_2.jpg" alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title" className="card-purchase-title">ARDUINO LEONARDO</h5>
                  <p class="card-text" className="card-purchase-body">L.300/Dia</p>
                </div>
                <Link to="/">
                  <Button className="card-button" variant="warning">Ver Producto</Button>
                </Link>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div class="card" className="card">
                <img class="card-img-top" className="images-card" src="https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/520x330/604a3538c15e081937dbfbd20aa60aad/a/0/a000066_featured_1_2.jpg" alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title" className="card-purchase-title">ARDUINO UNO REV3</h5>
                  <p class="card-text" className="card-purchase-body">L.350/Dia</p>
                </div>
                <Link to="/">
                  <Button className="card-button" variant="warning">Ver Producto</Button>
                </Link>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </MDBCol>
        </MDBRow>
        <MDBRow className="purchase-row">
            <MDBCol>
              <div class="card" className="card">
                <img class="card-img-top" className="images-card" src="https://www.aibitech.com/35929-thickbox_default/servidor-dell-poweredge-r740-r7401b061612t3pev1-intel-xeon-bronze-3106-17-ghz-16gb-ddr4-2tb-sata.jpg" alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title" className="card-purchase-title">Servidor Dell PowerEdge R740</h5>
                  <p class="card-text" className="card-purchase-body">L.3000/Mes</p>
                </div>
                <Link to="/">
                  <Button className="card-button" variant="warning">Ver Producto</Button>
                </Link>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div class="card" className="card">
                <img class="card-img-top" className="images-card" src="https://www.materialdelaboratorio.top/wp-content/uploads/2019/09/Volt%C3%ADmetro-digital.jpg" alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title" className="card-purchase-title">Voltimetro</h5>
                  <p class="card-text" className="card-purchase-body">L.100/Dia</p>
                </div>
                <Link to="/">
                  <Button className="card-button" variant="warning">Ver Producto</Button>
                </Link>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div class="card" className="card">
                <img class="card-img-top" className="images-card" src="https://cdn.homedepot.com.mx/productos/128462/128462-d.jpg" alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title" className="card-purchase-title">Cautin</h5>
                  <p class="card-text" className="card-purchase-body">L.50/Dia</p>
                </div>
                <Link to="/">
                  <Button className="card-button" variant="warning">Ver Producto</Button>
                </Link>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    </div>
  );
};

export default Card;
