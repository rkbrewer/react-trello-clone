import Link from 'next/link';
import Col from 'react-bootstrap/Col';

const linkStyle = {
  marginRight: 15,
  color: 'white'
};

export default () => (
  <Col className="header">
    <h1 className="text-white">Just Another Trello Clone</h1>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <hr/>
  </Col>
);