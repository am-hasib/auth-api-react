const jwtToken = require("jsonwebtoken");
exports.verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({ message: "Unauthoriized Request" });
  }
  jwtToken.verify(token, process.env.JWT_SECRET, (error, data) => {
    if (error) {
      return res.status(401).send({ message: "Unauthoriized Request" });
    }
    req._id = data._id;
    next();
  });
};
