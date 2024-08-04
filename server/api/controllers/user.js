const { db } = require("../../database"); 

const signUp = async (req, res, next) => {
try {
  const user = await db.Users.create(req.body);
  res.json(user);
} catch (error) {
  next(error);
}
};

const signIn = async (req, res, next) => {
try {
  const user = await db.Users.findOne({
    where: { id: req.params.id },
  });
} catch (error) {
  next(error);
}
};

module.exports = {
  signUp,
  signIn
};

