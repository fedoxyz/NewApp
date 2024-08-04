const { db } = require("../../database"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    const { username, password } = req.body;
    const user = await db.Users.findOne({
      where: { username: username },
    });
    if (!user) {
      res.status(401).json({ message: "Invalid email or password" });
      return
    }
    const isMatch = bcrypt.compareSync(password, user.password);
    if (isMatch) {
      const token = jwt.sign(
        {id: user.id},
        process.env.JWT_KEY,);
      res.set("Authorization", `Bearer ${token}`);
      res.set("Access-Control-Expose-Headers", "Authorization");
      res.json({ user });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    next(error);
  }
};

const verify = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.JWT_KEY);
      res.status(201).json();
    } else {
      next()
    }
  } catch (error) {
    next(error);
  }
}

const userInfo = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    decodedToken = jwt.decode(token, process.env.JWT_KEY)

    console.log(decodedToken);

  } catch (error) {
    next(error);
  }

}

module.exports = {
  signUp,
  signIn,
  verify,
  userInfo
};
