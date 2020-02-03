const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // get token from header in protected routes
  const token = req.header("x-auth-token");
  // if no token pass error
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Authorization denied at middleware token validation" });
  }
  // get just user id from token and set r
  try {
    const decode = jwt.verify(token, config.get("jwtSecret"));
    // assign the requesting user to the user portion of the token
    req.user = decode.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
