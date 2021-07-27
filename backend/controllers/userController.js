const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const ErrorResponse = require("../utils/errorResponse");

// @desc Get all users
// GET /api/v1/users
// Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    data: users,
    count: users.length,
  });
});

// @desc Get user by id
// GET /api/v1/users/:id
// Public
exports.getUserById = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorResponse("User could not be found", 404));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc Create user
// POST /api/v1/users
// Public
exports.createUser = asyncHandler(async (req, res, next) => {
  const { name, email, phone } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new ErrorResponse("User already exists", 400));
  }
  const user = await User.create({ name, email, phone });

  if (user) {
    res.status(201).json({ success: true, data: user });
  } else {
    return next(new ErrorResponse("Invalid user data", 400));
  }
});

// @desc Update user by id
// PUT /api/v1/users/:id
// Public
exports.updateUserById = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }

  updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });

  res.status(200).json({ success: true, data: updatedUser });
});

// @desc Delete user by id
// DELETE /api/v1/users/:id
// Public
exports.deleteUserById = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }

  await user.remove();

  res.status(200).json({ success: true, message: "User has been deleted" });
});
