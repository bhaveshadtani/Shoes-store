const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  migrationStorageTableName: "NodeMigration",
  timezone: "+05:30",
  logging: false,
  // logging: (msg) => console.log(msg),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  // DEFINE THESE OPTIONS HERE SO NO NEED TO DEFINE IN EVERY MODELS
  define: {
    timestamps: true, // Disable timestamps
    freezeTableName: true, // Freeze the table name
    paranoid: true, // For soft delete
    underscored: true, // Underscored table names
  },
};
