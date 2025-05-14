const adminMiddleware = (req, res, next) => {
  // console.log(req.user)
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({
      status: "fail",
      message: "Access denied, admin only",
    });
  }
};

module.exports = adminMiddleware;
