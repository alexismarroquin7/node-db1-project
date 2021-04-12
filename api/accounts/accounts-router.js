const router = require('express').Router()
const mw = require('./accounts-middleware');
const Account = require("./accounts-model");

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Account.getAll();
    res.status(200).json(accounts);
  } catch(err) {
    next(err);
  }
})

router.get('/:id', mw.checkAccountId, (req, res, next) => {
  res.status(200).json(req.account);
})

router.post('/', mw.checkAccountPayload, mw.checkAccountNameUnique, async (req, res, next) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch(err) {
    next(err);
  }
})

router.put('/:id', mw.checkAccountId, mw.checkAccountPayload, mw.checkAccountNameUnique, async (req, res, next) => {
  try {
    const updatedAccount = await Account.updateById(req.params.id, req.body);
    res.status(200).json(updatedAccount);
  } catch(err) {
    next(err);
  }
});

router.delete('/:id', mw.checkAccountId, async (req, res, next) => {
  try {
    const deletedAccount = await Account.deleteById(req.params.id);
    res.status(200).json(deletedAccount);
  } catch(err) {
    next(err);
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({ 
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
