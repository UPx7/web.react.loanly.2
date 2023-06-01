import React, { useEffect, useState } from 'react';
import ContainerNavbar from '../../components/ContainerNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import ToastViewEquipment from '../../components/ToastViewEquipment';

import "./styles.css";
import { TenderInterface } from '../../models/interfaces/tender.interface';
import { api, apiConfig } from '../../hooks/useApi';
import { environment } from '../../environments/environment';

function MyPage() {
  const [index, setIndex] = useState(0);
  const [tenderList, setTenderList] = useState<TenderInterface[]>([]);

  useEffect(() => {
    api.get(environment.routes.tenders.base, apiConfig)
      .then(result => setTenderList(result.data))
      .catch(error => alert(error.message));
  }, []);


  const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };
  
    return (
      <>
      <ContainerNavbar/>
      <Container>
        <header>
            <div className="d-flex flex-column flex-md-row align-items-left pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
                    <span className="fs-4"><h1 className='h1-tender'>Minhas locações</h1><strong>Máquinas alugadas</strong></span>
                </a>
            </div>

        </header>
        <main>  
          <Row xs={2} md={2} lg={4} className="justify-content-md-left g-4">
            {tenderList.map((tender, index) => (
                <Col key={ index }>
                    <ToastViewEquipment tender={ tender } />
                </Col>
            ))}
          </Row>
          
        </main>

      </Container>
      </>
    );
  }
  
  export default MyPage;
