import { useState, useContext } from 'react';
import { BoardContext } from '@/context/BoardContext';

import api from '@/api';

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const CreateList = (props) => {
  const { loadBoard } = useContext(BoardContext);

  const [title, setTitle] = useState('');

  const handleCreateList = () => {
    api.lists
      .create( { boardId: props.boardId, title })
      .then(loadBoard);
    setTitle('');
  };

  return (
    <div className="list list--create">
      <FormControl type="text" placeholder="New List" value={title} onChange={e => setTitle(e.target.value)} />
      <Button className="w-100" onClick={handleCreateList} disabled={!title}>+ Add List</Button>
    </div>
  );
};

export default CreateList;