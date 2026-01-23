import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          ${product.price},00
        </Card.Text>
        <Button variant="primary">Ver producto</Button>
      </Card.Body>
    </Card>
  )
}

export default Item