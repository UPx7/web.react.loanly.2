import React from 'react';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ContainerNavbar from '../../components/ContainerNavbar';

import ModalSelectionEquipment from '../../components/ModalSelectionEquipment';
import ToastEquipment from '../../components/ToastEquipment';
import './styles.css';

function NewEquipment() {
  return (
    <>
      <ContainerNavbar/>
      <Container className="container py- 3">
        <header>
          <div className="d-flex flex-column flex-md-row align-items-left pb-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg> */ }
              <span className="fs-4"><h1 className="h1-tender">Equipamento</h1><strong>Incluir novo equipamento</strong></span>
            </a>
          </div>

          {/* <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
           <h1 className="display-4 fw-normal">Pricing</h1>
           <p className="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
           </div> */ }

        </header>
        {/* xs={2} md={2} lg={4}s */ }
        <main>
          <Row className="row mb-2 justify-content-md-left">
            <Col xs={ 12 } md={ 12 } lg={ 4 }>
              <div className="mb-4">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control type="text" placeholder="Informe o modelo do equipamento" />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formModalSelectionModel">
                      <Form.Label>Escolha a categoria</Form.Label>
                      <Form.Select> 
                          <option disabled value={0} selected>Selecione uma opção</option>
                          <option value={0}>Escavadeiras</option>
                          <option value={0}>Retroescavadeiras</option>
                          <option value={0}>Pá Carregadeiras</option>
                          <option value={0}>Rolos Compactadores</option>
                          <option value={0}>Tratores de esteira</option>
                          <option value={0}>Tratores de roda</option>
                          <option value={0}>Motoniveladoras</option>
                          <option value={0}>Manipuladores Telescópicos</option>
                          <option value={0}>Perfuratriz</option>
                      </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control type="text" placeholder="Informe o peso bruto do modelo" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Potência</Form.Label>
                    <Form.Control type="text" placeholder="Informe a potência do motor" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição do máquinário</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                  </Form.Group>
                </Form>
                <Button variant="outline-secondary rounded-3" type="submit">Cadastrar</Button>
              </div>
            </Col>
          </Row>  

        </main>
      </Container>
    </>
  );
}

export default NewEquipment;
