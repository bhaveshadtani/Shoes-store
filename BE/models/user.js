module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.first_name} ${this.last_name}`;
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM("0", "1", "2"),
      allowNull: false,
      defaultValue: "2", // Default to '2' (Customer),
      comment: "0: Super Admin, 1: Admin, 2: Customer",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_reset_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password_reset_expires: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  });
  // User.sync({force: true}).then(() => {console.log("Sync successful")}).catch(() => {console.log("")});
  return User;
};
