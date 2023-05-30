import { Card, Button } from "react-bootstrap";
import CarouselImages from "../CarouselImages";
import { FaWeightHanging } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import { EquipmentProxy } from "../../models/interfaces/equipment.proxy";
import "./styles.css";

function CardEquipment(props: { equipment: EquipmentProxy }) {


  return (
    <Card style={{width: '18rem'}}>
      <CarouselImages/>
      <Card.Body className="text-center">
        <Card.Title className="text-center">{props.equipment.modelo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.equipment.description}</Card.Subtitle>
        <Card.Text>
          <FaWeightHanging size="1.5em" color="#00C89B"/> {props.equipment.peso} Kg
          <ImPower size="1.5em" color="#00C89B"/> {props.equipment.potencia} Hp
        </Card.Text>
        <Button href={`equipment?id=${props.equipment._id}`} variant="faded" size="sm" className="buttonViewEquip">
          Ver equipamento
          <BsArrowRight size="1em" color="#000"/>
        </Button>
        <div className="d-grid gap-2">
          <Button href="tender" variant="faded" size="lg" className="buttonAddBudget">
            Fechar orçamento
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardEquipment;
