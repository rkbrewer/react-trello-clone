import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CreateBoardModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Board</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Get crackin'!  You need a board to organize your task lists.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
        Cancel
      </Button>
        <Button onClick={props.handleCreate}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBoardModal;
