import FormControl from 'react-bootstrap/FormControl';
import {useEditableElement} from '@/hooks/useEditableElement';
import api from '@/api';
import {useRef} from 'react';

const ListEditableTitle = (props) => {
  const saveFn = title => api.lists.update(props.id, {title});
  const el = useRef(null);
  const [title, handleTitleChange, editing, startEditing] = useEditableElement(props.title, saveFn, el);

  return (
    <div>
      {editing
        ? <FormControl ref={el} type="text" value={title} onChange={handleTitleChange} />
        : <h4 onClick={startEditing}>{title}</h4>
      }
    </div>
  );
};

export default ListEditableTitle;
