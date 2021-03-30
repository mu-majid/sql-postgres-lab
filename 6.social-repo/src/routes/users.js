const express = require('express');
const UserRepo = require('../repos/user-repo');

const router = express.Router();

router.get('/users', async (req, res) => {
  // Run a query to get all users
  const users = await UserRepo.find();

  // Send the result back to the person
  // who made this request
  res.send(users);
});

router.get('/users/:id', async (req, res) => {});

router.post('/users', async (req, res) => {});

router.put('/users/:id', async (req, res) => {});

router.delete('/users/:id', async (req, res) => {});

module.exports = router;
