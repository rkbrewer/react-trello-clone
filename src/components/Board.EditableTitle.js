import FormControl from 'react-bootstrap/FormControl';
import { useRef } from 'react';
import {useEditableElement} from '@/hooks/useEditableElement';
import api from '@/api';

const BoardEditableTitle = (props) => {
  const saveFn = title => api.boards.update(props.id, {title});
  const el = useRef(null);
  const [title, handleTitleChange, editing, startEditing] = useEditableElement(props.title, saveFn, el);

  return (
    <div>
      {editing
        ? <FormControl ref={el} controlid="BoardTitle" type="text" value={title} onChange={handleTitleChange} />
        : <h2 onClick={startEditing} className="text-white">{title}</h2>
      }
    </div>
  );
};

export default BoardEditableTitle;
