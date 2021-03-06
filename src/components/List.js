import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import ListCard from '@/components/ListCard';
import EditableListTitle from '@/components/List.EditableTitle';

import api from '@/api';
import {useContext} from 'react';
import {BoardContext} from '@/context/BoardContext';

const List = props => {
  const { loadBoard } = useContext(BoardContext);

  const createListCard = () => {
    api.cards.create(props.id).then(loadBoard);
  };

  return (
    <div className="list">
      <EditableListTitle id={props.id} title={props.title} />
      {
        props.Cards.map(card => <ListCard {...card} key={card.id} />)
      }
      <Button className="w-100" onClick={createListCard}>+ Add Card</Button>
    </div>
  );
};

export default List;