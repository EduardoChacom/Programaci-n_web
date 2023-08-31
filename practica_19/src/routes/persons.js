const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');

router.get('/gente', async (req, res) => {
    // Consulta a la base de datos para buscar 
    // todos los documentos en la colección 'Person'
    const Persons = await Person.find({});
    // Enviar una respuesta JSON con los documentos encontrados
    res.json(Persons);
});

module.exports = router;