import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import EditableCardTitle from '@/components/Card.EditableTitle';

import { useContext, useEffect, useState } from 'react';
import { CardEditorContext } from '@/context/CardEditorContext';
import { BoardContext } from '@/context/BoardContext';

import api from '@/api';

const CardEditor = () => {
  const { id, setId } = useContext(CardEditorContext);
  const { loadBoard } = useContext(BoardContext);
  const [form, setForm] = useState({});

  useEffect( () => {
    const fetchData = async () => {
      const { data } = await api.cards.fetchOne(id);
      setForm(data);
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleCancel = () => setId(null);
  const handleSave = () => {
    api.cards.update(id, form).then(loadBoard);
    setId(null);
  };

  const handleDelete = async () => {
    await api.cards.delete(id);
    loadBoard();
    setId(null);
  };

  return (
    <Modal show={!!id} onHide={handleCancel}>
      <Modal.Header closeButton>
        <EditableCardTitle id={id} title={form.title} />
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>TODO put form here, populate with fetched data</p>
          { JSON.stringify(form) }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleSave}>
          Save
        </Button>
        <Button onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardEditor;