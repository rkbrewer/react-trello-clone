var express = require('express');
var router = express.Router();
var models = require('../models');

/* ***********************
Boards
*********************** */
router.get('/api/boards', async (req, res) => {
  try {
    const boards = await models.Board.findAll();
    res.json(boards);
  } catch (error) {
    res.json({error});
  }
});

router.get('/api/boards/:id', async (req, res) => {
  try {
    const board = await models.Board.findOne({
      where: {
        id: Number(req.params.id)
      },
      include: {
        model: models.List,
        include: models.Card
      }
    });
    res.json(board);
  } catch (error) {
    res.json({error});
  }
});

router.post('/api/boards', async (req, res) => {
  try {
    const newBoard = await models.Board.create({
        title: 'New Board',
        description: ''
    });

    await newBoard.createList({ title: 'New List' });

    const board = await models.Board.findOne({
      where: {
        id: newBoard.id
      },
      include: models.List
    });

    res.json(board);
  } catch (error) {
    res.json({error});
  }
});

router.put('/api/boards/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const board = await models.Board.update({
    title,
    description
  }, {
    where: {
      id: Number(id)
    }
  });

  res.json(board);
});

router.delete('/api/boards/:id', (req, res) => {
  return models.Board.destroy({
    where: {
      id: Number(req.params.id)
    }
  });
});


/* ***********************
Lists
*********************** */
router.post('/api/lists', async (req, res) => {
  try {
    const board = await models.Board.findOne({
      where: {
        id: req.body.boardId
      }
    });

    board.createList({ title: 'New List' });

    res.json(board);
  } catch (error) {
    res.json({error});
  }
});

router.put('/api/lists/:id', async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const list = await models.List.update({
    title
  }, {
    where: {
      id: Number(id)
    }
  });

  res.json(list);
});

router.delete('/api/lists/:id', (req, res) => {
  return models.List.destroy({
    where: {
      id: Number(req.params.id)
    }
  });
});


/* ***********************
Cards
*********************** */
router.post('/api/cards', async (req, res) => {
  try {
    const list = await models.List.findOne({
      where: {
        id: req.body.listId
      }
    });

    list.createCard({ title: 'New Card', description: 'Enter your description here.' });

    return res.sendStatus(200);
  } catch (error) {
    return res.json({ error });
  }
});

router.get('/api/cards/:id', async (req, res) => {
  try {
    const card = await models.Card.findOne({
      where: {
        id: Number(req.params.id)
      }
    });

    return res.json(card);
  } catch (error) {
    return res.json({ error })
  }
});

router.put('/api/cards/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const card = await models.Card.update({
    title,
    description
  }, {
    where: {
      id: Number(id)
    }
  });

  res.json(card);
});

router.delete('/api/cards/:id', async (req, res) => {
  await models.Card.destroy({
    where: {
      id: Number(req.params.id)
    }
  });
  res.sendStatus(200);
});

module.exports = router;
