import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css';
const Player =({nom,equipe,nationalite,numero,age,img}) => {
  return (
    <div className="pl">
    <Card style={{ width: '18rem' }} className='pl1' >
      <img className='tof' src={img} ></img>
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{nom}</ListGroup.Item>
        <ListGroup.Item>{equipe}</ListGroup.Item>
        <ListGroup.Item>{nationalite}</ListGroup.Item>
        <ListGroup.Item>{numero}</ListGroup.Item>
        <ListGroup.Item>{age}</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Player;