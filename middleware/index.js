const authorize = (req, res, next) => {
  if (req.session.user) {
    // Calls the next middleware function
    next();
  } else {
    res.redirect("/signin");
  }
};

module.exports = authorize;
