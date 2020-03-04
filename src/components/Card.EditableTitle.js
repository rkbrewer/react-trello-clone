import FormControl from 'react-bootstrap/FormControl';

import { useRef } from 'react';
import { useEditableElement } from '@/hooks/useEditableElement';

import api from '@/api';

const CardEditableTitle = (props) => {
  const saveFn = title => api.cards.update(props.id, { title });
  const el = useRef(null);
  const [title, handleTitleChange, editing, startEditing] = useEditableElement(props.title, saveFn, el);

  return (
    <div>
      {editing
        ? <FormControl ref={el} type="text" value={title} onChange={handleTitleChange} />
        : <h2 onClick={startEditing}>{title}</h2>
      }
    </div>
  );
};

export default CardEditableTitle;
