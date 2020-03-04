import Link from 'next/link';
import Card from 'react-bootstrap/Card';

export default (props) => (
  <Link href="/boards/[id]" as={`/boards/${props.id}`}>
    <Card bg="primary" text="white">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  </Link>
);
