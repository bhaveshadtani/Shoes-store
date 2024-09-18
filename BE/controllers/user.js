const db = require("../models");
const User = db.User;

const login = async (req, res) => {
  const userData = await User.findAll();
  // return res.json(userData);

  // const delUser = await User.destroy({where: { id: 1 }});
  // return res.json(delUser);

  const userAdd = await User.create({
    first_name: "John",
    last_name: "Doe1",
    email: "john@gmail.com",
    password: "password123",
  });
  return res.json(userAdd);
};

module.exports = {
  login,
};
