let auth = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/error");
    }
  };
  module.exports = auth;