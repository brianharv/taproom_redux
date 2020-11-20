import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function Keg(props) {

  return(
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.brand} | {props.flavor}</Card.Subtitle>
          <ListGroup variant="flush">
            <ListGroup.Item>ABV% {props.alcCon}</ListGroup.Item>
            <ListGroup.Item>${props.price} <em>per pint</em></ListGroup.Item>
            <ListGroup.Item>{props.quantity} Serving Remaining</ListGroup.Item>
          </ListGroup>
          <Card.Link href="#" onClick={() => props.whenKegClicked(props.id)}>View Product Details</Card.Link><br></br>
          <Card.Link href="#">Visit Brewery Website</Card.Link>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcCon: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;