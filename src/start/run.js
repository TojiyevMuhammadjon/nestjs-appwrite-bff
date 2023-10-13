const { default: mongoose } = require("mongoose");
const config = require("../../config");

const bootstrap = (app) => {
  mongoose.connect("mongodb://127.0.0.1:27017/olx", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });

  const decorativeLine = "*".repeat(50);
  app.listen(config.port, () => {
    console.log(`\n${decorativeLine}`);
    console.log(`  🚀 Server is running on port ${config.port}`);
    console.log(`${decorativeLine}\n`);
  });
};

module.exports = bootstrap;
