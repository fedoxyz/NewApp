const express = require("express");

const { addHeaders, tokenAuth, errorHandler } = require("./middleware")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const userRoutes = require("./routes/user");
const app = express();
const router = express.Router();

router.use(errorHandler);
router.use(cookieParser())
router.use(tokenAuth);

app.use(express.json());
app.use(cors());
app.use(addHeaders)
app.use('/', userRoutes);



module.exports = app;
