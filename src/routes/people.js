const express = require('express');
const {
  addPeople,
  deletePeople,
  editPeople,
  getAllPeople,
  getPeoplebyId,
} = require('../controllers');

const validatePostBody = require('../middlewares/validatePost');

const peopleRoutes = new express.Router();

peopleRoutes.get('/people', getAllPeople);

peopleRoutes.post('/people', validatePostBody, addPeople);

peopleRoutes.get('/people/:id', getPeoplebyId);

peopleRoutes.delete('/people/:id', deletePeople);
peopleRoutes.patch('/people/:id', editPeople);

module.exports = peopleRoutes;
