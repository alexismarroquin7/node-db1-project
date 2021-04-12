exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body;
  if(name && budget){
    next();
  } else {
    res.status(400).json({ message: "name and budget are required fields" });
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}
