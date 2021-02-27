const express = require('express');
const peopleRoutes = require('./people');

const allRoutes = new express.Router();

allRoutes.use(peopleRoutes);

module.exports = allRoutes;
