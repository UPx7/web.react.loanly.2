import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ContainerNavbar from '../../components/ContainerNavbar';
import './styles.css';
import {UserPayload} from "../../models/payloads/user.payload";
import {api} from "../../hooks/useApi";
import {environment} from "../../environments/environment";
import {useNavigate} from "react-router";

function FormClient() {

  const navigate = useNavigate();
  const [form, setForm] = useState<UserPayload>({
    id: '',
    name: '',
    email: '',
    imageUrl: '',
    password: '',
    celular: '',
    cep: '',
    endereco: '',
    numero: 0,
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    empresa: '',
    cnpj: '',
  });

  const registerNewUser = async (): Promise<void> => {
    try {
      await api.post(environment.routes.auth.signUp, form);

      alert('Usuário registrado com sucesso');
      navigate('/');
    } catch (error) {
      // @ts-ignore
      alert(error.message());
    }
  }

  return (
    <>
      <ContainerNavbar/>
      <Container fluid="md" className="">
        <div className="d-flex flex-column flex-md-row align-items-left pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-left link-body-emphasis text-decoration-none">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg> */ }
            <span className="fs-4"><h1 className="h1-tender">Perfil</h1><strong>Para locação</strong></span>
          </a>
        </div>

        <Row xs={ 12 } md={ 12 } lg={ 12 } className="justify-content-md-center g-4">
          <Col xs={ 12 } md={ 6 } lg={ 6 }>
            <Form className="formClient">
              <span className="fs-5"><p>Dados de cadastro</p></span>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  placeholder="Nome"
                  value={ form?.name }
                  onChange={(event) => setForm({ ...form, name: event.target.value })}/>
                {/* <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
                 </Form.Text> */ }
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  placeholder="Celular"
                  value={ form?.celular }
                  onChange={(event) => setForm({ ...form, celular: event.target.value })}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  placeholder="Email"
                  value={ form?.email }
                  onChange={(event) => setForm({ ...form, email: event.target.value })}/>
              </Form.Group>
              <Row>
                <Col xs={ 3 } md={ 3 } lg={ 3 }>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      placeholder="CEP"
                      value={ form?.cep }
                      onChange={(event) => setForm({ ...form, cep: event.target.value })}/>
                  </Form.Group>
                </Col>
                <Col xs={ 9 } md={ 9 } lg={ 9 }>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      placeholder="Endereço comercial"
                      value={ form?.endereco }
                      onChange={(event) => setForm({ ...form, endereco: event.target.value })}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={ 3 } md={ 3 } lg={ 3 }>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      placeholder="Número"
                      value={ form?.numero }
                      onChange={(event) => setForm({ ...form, numero: +event.target.value })}/>
                  </Form.Group>
                </Col>
                <Col xs={ 6 } md={ 6 } lg={ 9 }>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      placeholder="Complemento"
                      value={ form?.complemento }
                      onChange={(event) => setForm({ ...form, complemento: event.target.value })}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={ 3 } md={ 3 } lg={ 4 }>
                  <Form.Group className="mb-2" controlId="formClient_barirro">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      placeholder="Bairro"
                      value={ form?.bairro }
                      onChange={(event) => setForm({ ...form, bairro: event.target.value })}/>
                  </Form.Group>
                </Col>
                <Col xs={ 6 } md={ 6 } lg={ 6 }>
                  <Form.Group className="mb-2" controlId="formBformClient_cidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      placeholder="Cidade"
                      value={ form?.cidade }
                      onChange={(event) => setForm({ ...form, cidade: event.target.value })}/>
                  </Form.Group>
                </Col>
                <Col xs={ 6 } md={ 6 } lg={ 2 }>
                  <Form.Group className="mb-2" controlId="formClient_uf">
                    <Form.Label>UF</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      placeholder="UF"
                      value={ form?.uf }
                      onChange={(event) => setForm({ ...form, uf: event.target.value })}/>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xs={ 12 } md={ 6 } lg={ 6 }>
            <Form className="formClient">
              <span className="fs-5"><p>Dados da empresa</p></span>
              <Form.Group className="mb-3" controlId="formClient_empresa">
                <Form.Label>Empresa</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  placeholder="Empresa"
                  value={ form?.empresa }
                  onChange={(event) => setForm({ ...form, empresa: event.target.value })}/>
              </Form.Group>
              <Form.Group className="mb-2" controlId="formClient_cnpj">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  placeholder="CNPJ"
                  value={ form?.cnpj }
                  onChange={(event) => setForm({ ...form, cnpj: event.target.value })}/>
              </Form.Group>
              <span className="fs-5"><p>Dados do Login</p></span>
              <Form.Label>E-mail de acesso à conta: </Form.Label> <strong>{ form?.email }</strong>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  autoFocus
                  type="password"
                  placeholder="Informe sua senha"
                  onChange={(event) => setForm({ ...form, password: event.target.value })}/>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Mostrar senha"/>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="success outline" onClick={ registerNewUser }>
                  Enviar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row xs={ 12 } md={ 12 } lg={ 12 } className="justify-content-md-center g-4">
          <Col xs={ 6 } md={ 6 } lg={ 6 }>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FormClient;
