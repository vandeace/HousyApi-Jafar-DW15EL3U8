exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppErr('You dont have a permission to perform this action', 403)
      );
    }

    next();
  };
};
