import {CardEditorContext} from '@/context/CardEditorContext';
import { useContext } from 'react';

const ListCard = props => {
  const { setId } = useContext(CardEditorContext);

  return (
    <div className="list-card" onClick={() => setId(props.id)}>
      <p className="m-0">{props.title}</p>
    </div>
  );
};

export default ListCard;
