const { db } = require("../../database"); 

const getAllUsers = async (req, res, next) => {
try {
  const users = await db.Users.findAll();
  res.json(users);
} catch (error) {
  next(error);
}

};
const newUser = async (req, res, next) => {
try {
  const user = await db.Users.create(req.body);
  res.json(user);
} catch (error) {
  next(error);
}
};

const getUser = async (req, res, next) => {
try {
  const user = await db.Users.findOne({
    where: { id: req.params.id },
  });
} catch (error) {
  next(error);
}
};

module.exports = {
  getAllUsers,
  newUser,
  getUser
};

