const User = require("../models/userSchema");

exports.createUser = async (req, res) => {
  const { name, email, age, mobile, work, address, description } = req.body;

  if (!name || !email || !age || !mobile || !work || !address || !description) {
    return res
      .status(404)
      .json({ message: "All fields are required.", status: 404 });
  }

  try {
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res
        .status(401)
        .json({ message: "This email is already in use.", status: 401 });
    }

    const user = new User({
      name,
      email,
      age,
      mobile,
      work,
      address,
      description,
    });

    await user.save();

    res
      .status(201)
      .json({ message: "A new user created successfully.", status: 201 });
  } catch (err) {
    console.log(err);
  }

  res.send("Hello from router");
};

exports.fetchUsers = async (req, res) => {
  const users = await User.find();

  res.json({ users, status: 200 });
};

exports.fetchUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({ user, status: 200 });
  } catch (error) {
    res
      .status(404)
      .json({ message: `Fetching data error: ${error}`, status: 404 });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const isUserExist = await User.findById(id);
    if (!isUserExist) {
      return res
        .status(409)
        .json({ message: "Sorry, no user found with this ID", status: 409 });
    }

    await User.findByIdAndDelete(id);

    res.json({ message: "User has been deleted.", status: 200 });
  } catch (error) {
    res
      .status(404)
      .json({ message: `Fetching data error: ${error}`, status: 404 });
  }
};
