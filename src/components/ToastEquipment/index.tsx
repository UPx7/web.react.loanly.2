import Toast from 'react-bootstrap/Toast';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

import "./styles.css";

function ToastEquipment() {
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <Toast
            show={showA} onClose={toggleShowA}
            className="d-inline-block m-1"
            key={0}
        >
        <Toast.Header closeButton={false}>
            
            <strong className="me-auto">Empilhadeira</strong>
            <small><Alert.Link onClick={toggleShowA} className='alert-link' href="#">Excluir</Alert.Link></small>
        </Toast.Header>
        <Toast.Body>Modelo <strong>JCB 1160</strong></Toast.Body>
        </Toast>
    );
}

export default ToastEquipment;