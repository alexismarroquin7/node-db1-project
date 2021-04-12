const Account = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body;
  if(name && budget){
    next();
  } else {
    res.status(400).json({ message: "name and budget are required fields" });
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id);
    req.account = account;
    next();
  } catch {
    res.status(404).json({ message: "account not found" });
  }
}
