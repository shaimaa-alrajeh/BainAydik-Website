/* const jwt = require("jsonwebtoken");

const authorizeRole = (requiredRole) => (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, "Shay", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    if (decoded.role !== requiredRole) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = decoded; // Attach user info to request object
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = { authorizeRole };

// module.exports = { authorizeRole };
 */
const jwt = require("jsonwebtoken");

const authorizeRole = (requiredRole) => (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, "Shay", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    if (decoded.role !== requiredRole && requiredRole !== "user") {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = decoded; // Attach user info to request object
    next();
  });
};

module.exports = { authorizeRole };
