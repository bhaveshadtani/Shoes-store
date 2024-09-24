const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");

const app = express();
require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", require("./routes/user"));
app.use("/products", require("./routes/product"));
// app.use("/orders", require("./routes/order"));
// app.use("/reviews", require("./routes/review"));
// app.use("/cart", require("./routes/cart"));
// app.use("/checkout", require("./routes/checkout"));
// app.use("/shipping", require("./routes/shipping"));
// app.use("/returns", require("./routes/return"));
// app.use("/blog", require("./routes/blog"));

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
