const getAllUsers = (req, res, next) => {
    res.json({message: "GET all Users"});
};
const newUser = (req, res, next) => {
    res.json({message: "POST new user"});
};

const getUser = (req, res, next) => {
    res.json({message: "GET user"});
};

//export controller functions
module.exports = {
  getAllUsers,
  newUser,
  getUser
};

