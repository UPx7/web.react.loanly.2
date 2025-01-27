import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaWeightHanging } from 'react-icons/fa';
import { ImPower } from 'react-icons/im';
import CarouselImages from '../../components/CarouselImages';
import ContainerNavbar from '../../components/ContainerNavbar';
import { api, apiConfig } from '../../hooks/useApi';
import './styles.css';
import { environment } from '../../environments/environment';
import { EquipmentProxy } from '../../models/interfaces/equipment.proxy';

function Equipment() {
  const equipmentId = window.location.search.replace('?id=', '');
  const [equipment, setEquipment] = useState<EquipmentProxy>();

  useEffect(() => {
    if (!equipmentId)
      return alert('Nenhum equipamento foi encontrado...');

    const url = environment.routes.equipments.byId.replace('{id}', equipmentId);

    api.get(url, apiConfig)
      .then(result => setEquipment(result.data))
      .catch(error => alert(error.message));
  }, []);

  return (
    <>
      <ContainerNavbar/>
      <Container className="container py-3">
        <header>
          <div className="d-flex flex-column flex-md-row align-items-left pb-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg> */ }
              <span className="fs-4"><h1>JCB 116D</h1><strong>Categoria</strong></span>
            </a>
          </div>

          {/* <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
           <h1 className="display-4 fw-normal">Pricing</h1>
           <p className="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
           </div> */ }

        </header>
        <main>
          <Row className="row row-cols-1 row-cols-md-2 mb-2 align-items-center text-center justify-content-md-left">
            <Col xs={ 12 } md={ 12 } lg={ 7 }>
              <div className="pricing-header p-3 pb-md-4 mx-auto">
                <h2 className="fw-normal">{ equipment?.modelo }</h2>
                <Row xs={ 5 } md={ 4 } lg={ 12 }>
                  <Col xs={ 0 } md={ { span: 4, offset: 2 } }>
                    <FaWeightHanging className="p-1 mb-4" size="3em" color="#00C89B"/> { equipment?.peso } Kg
                  </Col>
                  <Col xs={ 0 } md={ { span: 4, offset: 0 } }>
                    <ImPower className="p-1 mb-4" size="3em" color="#00C89B"/> { equipment?.potencia } Hp
                  </Col>
                </Row>
                <p className="fs-6 text-body-secondary">{ equipment?.description }</p>
                <div className="d-grid gap-2">
                  <Button href="tender" variant="primary" size="lg">
                    Realize seu orçamento
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={ 12 } md={ 12 } lg={ 5 }>
              <CarouselImages/>
            </Col>
          </Row>

        </main>
      </Container>
    </>
  );
}

export default Equipment;
