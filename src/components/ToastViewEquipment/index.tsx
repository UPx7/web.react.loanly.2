import Toast from 'react-bootstrap/Toast';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

import "./styles.css";
import { TenderInterface } from '../../models/interfaces/tender.interface';

function ToastViewEquipment(props: { tender: TenderInterface }) {
    return (
        <Toast
            show={true}
            className="d-inline-block m-1"
            key={0}
        >
        <Toast.Header closeButton={false}>
            
            <strong className="me-auto">Empilhadeira</strong>
            <small><Alert.Link className='alert-link' href={`dashboard?tenderId=${ props.tender._id }`}>Visualizar Dashboard</Alert.Link></small>
        </Toast.Header>
        <Toast.Body>
            Modelo <strong>JCB 1160</strong>
            <br></br>
            <small>Data da reserva: <p> { props.tender.data_reserva?.substr(0, 10) } </p></small>
        </Toast.Body>

        </Toast>
    );
}

export default ToastViewEquipment;
