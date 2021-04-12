const router = require('express').Router()
const mw = require('./accounts-middleware');
const Accounts = require("./accounts-model");

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll();
    res.status(200).json(accounts);
  } catch(err) {
    next(err);
  }
})

router.get('/:id', mw.checkAccountId, (req, res, next) => {
  res.status(200).json(req.account);
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({ 
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
