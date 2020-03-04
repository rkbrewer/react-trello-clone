import Layout from '@/layouts/default';
import BoardCard from '@/components/BoardCard';
import CreateBoardButton from '@/components/CreateBoardButton';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import api from '@/api';

const IndexPage = (props) => {
  return (
    <Layout>
      <Row>
        <Col>
          <h2>
            Boards
          </h2>
          <p>Select a board</p>
        </Col>
        <Col>
          <CreateBoardButton />
        </Col>
      </Row>
      <Row noGutters>
        { props.boards.map(board => (
          <Col key={board.id}>
            <BoardCard {...board} />
          </Col>))
        }
      </Row>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  let boards;

  try {
    const { data } = await api.boards.fetchAll();
    boards = data;
  } catch (e) {
    boards = [];
  }

  return {
    boards
  };
};

export default IndexPage;
