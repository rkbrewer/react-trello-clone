import Button from 'react-bootstrap/Button';

import ListCard from '@/components/ListCard';
import EditableListTitle from '@/components/List.EditableTitle';

import { useContext } from 'react';
import { BoardContext } from '@/context/BoardContext';

import api from '@/api';

import { useDrop } from 'react-dnd';
import { DnDItemTypes } from '@/types';

const List = props => {
  const { loadBoard } = useContext(BoardContext);

  const createListCard = () => {
    api.cards.create(props.id).then(loadBoard);
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: DnDItemTypes.LIST_CARD,
    drop: async (item) => {
      // Move the card to this list, then reload the board
      if (props.id !== item.listId) {
        await api.cards.update(item.id, { listId: props.id });
        loadBoard();
      }
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });

  const style = {
    outline: canDrop ? `2px solid ${isOver ? 'green' : 'yellow'}` : ''
  };

  return (
    <div className="list" style={style} ref={drop}>
      <EditableListTitle id={props.id} title={props.title}/>
      {
        props.Cards.map(card =>
          <ListCard {...card} key={card.id}/>
        )
      }
      <Button className="w-100" onClick={createListCard}>+ Add Card</Button>
    </div>
  );
};

export default List;