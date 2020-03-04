import Button from 'react-bootstrap/Button';
import CreateBoardModal from '@/components/CreateBoardModal';

import api from '@/api';

import { useState, useContext } from 'react';
import { BoardContext } from '@/context/BoardContext';

const CreateBoardButton = props => {
  const { loadBoard } = useContext(BoardContext);

  const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);

  const handleShowCreateBoardModal = () => setShowCreateBoardModal(true);
  const handleHideCreateBoardModal = () => setShowCreateBoardModal(false);

  const handleCreateBoard = async () => {
    await api.boards.create().then(loadBoard);
    handleHideCreateBoardModal();
  };

  return (
    <div>
      <Button onClick={handleShowCreateBoardModal}>+ Board</Button>
      <CreateBoardModal
        show={showCreateBoardModal}
        handleClose={handleHideCreateBoardModal}
        handleCreate={handleCreateBoard}
      />
    </div>
  )
};

export default CreateBoardButton;