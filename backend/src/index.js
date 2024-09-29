/* Import */
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userAuthRouter = require("./routes/userAuthRouter");
const { dbConnect } = require("./lib/dbConnect");
const cors = require("cors");
/* Configuration */
dotenv.config();
const PORT = process.env.PORT || 8001;
const app = express();

/* Middleware */
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

/* Routes */
app.use("/user", userAuthRouter);

/* App Start */
app.listen(PORT, () => {
  dbConnect();
  console.log(`Server Running on PORT:${PORT}`);
});
