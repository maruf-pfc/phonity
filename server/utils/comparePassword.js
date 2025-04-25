const bcrypt = require("bcryptjs");

const comparePassword = async function (enteredPassword, hashedPassword) {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

module.exports = comparePassword;
