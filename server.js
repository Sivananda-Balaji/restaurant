const app = require("./app");
const mongoose = require("mongoose");
const { DB_URL } = require("./configs/db.config");
const { PORT } = require("./configs/server.config");

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
