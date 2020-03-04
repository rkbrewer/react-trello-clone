import { useContext } from 'react';
import { CardEditorContext } from '@/context/CardEditorContext';

import { useDrag } from 'react-dnd';
import { DnDItemTypes } from '@/types';

const ListCard = props => {
  const [{ style }, dragRef] = useDrag({
    item: {
      type: DnDItemTypes.LIST_CARD,
      id: props.id
    },
    collect: monitor => ({
      style: {
        opacity: monitor.isDragging() ? 0.5 : 1,
        color: monitor.isDragging() ? 'gray' : 'inherit'
      }
    })
  });

  const { setId } = useContext(CardEditorContext);

  return (
    <div ref={dragRef} style={style} className="list-card" onClick={() => setId(props.id)}>
      <p className="m-0">{props.title}</p>
    </div>
  );
};

export default ListCard;
