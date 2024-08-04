function addHeaders(req, res, next) {
  
  console.log("addHeaders");
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  res.append("Access-Control-Allow-Credentials");
  next()
}

function errorHandler(err, req, res, next) {
  console.log("errorHandler");
  console.error(err.stack);
  res.status(500).json({error: "Internal Server Error" });
}

function tokenAuth(req, res, next) {
  try {
  console.log("tokenAuth");
    if (!req.headers.authorization) {
      return res.status(403).json({ error: "No credentials sent!" });
    }

    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.decodedToken = decodedToken;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addHeaders,
  errorHandler,
  tokenAuth
}

