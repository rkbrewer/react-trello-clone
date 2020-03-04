import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffectOnce } from 'react-use';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { CardEditorContext } from '@/context/CardEditorContext';
import { BoardContext } from '@/context/BoardContext';

import CardEditor from '@/components/CardEditor';
import CreateList from '@/components/CreateList';
import EditableBoardTitle from '@/components/Board.EditableTitle';
import Layout from '@/layouts/default';
import List from '@/components/List';

import api from '@/api';

const BoardPage = (props) => {
  useEffectOnce(() => {
    document.body.classList.add('board-page');
    return () => document.body.classList.remove('board-page');
  });

  const router = useRouter();
  const destroyBoard = () => {
    api.boards.delete(board.id);
    router.push('/');
  };

  const [cardEditorId, setCardEditorId] = useState(null);

  const [board, setBoard] = useState(props.board);
  const loadBoard = async () => {
    const { data } = await api.boards.fetchOne(props.board.id);
    setBoard(data);
  };

  return (
    <Layout>
      <BoardContext.Provider value={{ loadBoard }}>
        <Row>
          <Col md="auto">
            <EditableBoardTitle id={board.id} title={board.title}/>
          </Col>
          <Col>
            <Button variant="danger" onClick={destroyBoard}>Delete</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="list-container">
              {
                board.Lists.map(list => (
                  <CardEditorContext.Provider key={list.id} value={{ id: cardEditorId, setId: setCardEditorId }}>
                    <List {...list} />
                    <CardEditor/>
                  </CardEditorContext.Provider>
                ))
              }
              <CreateList boardId={board.id}/>
            </div>
          </Col>
        </Row>
      </BoardContext.Provider>
    </Layout>
  );
};

BoardPage.getInitialProps = async (context) => {
  const { id } = context.query;

  const { data } = await api.boards.fetchOne(id);

  return {
    board: data
  };
};

export default BoardPage;