const express = require('express')
const usersService = require('../services/user.service')
const router = express.Router();
let service = new usersService();

router.get('/', (req, res)=>{
    const users = service.find();
    res.json(users)
})

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    const rta = service.findOne(id);
    res.json(rta);
})

router.post('/', (req, res)=>{
    const body = req.body;
    const rta = service.create(body);
    console.log(rta)
    res.json(rta)
})

router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    const response = service.delete(id)
    res.json(response)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const data = req.body
  const response = service.update(id, data)
  res.json(response)
})


module.exports = router
