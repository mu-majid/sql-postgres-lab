const express = require('express');

const router = express.Router();

router.get('/users', async (req, res) => {});

router.get('/users/:id', async (req, res) => {});

router.post('/users', async (req, res) => {});

router.put('/users/:id', async (req, res) => {});

router.delete('/users/:id', async (req, res) => {});

module.exports = router;
