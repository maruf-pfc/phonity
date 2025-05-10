// server/server.js
const app = require("./app");
const dbConnection = require("./configs/db");

const PORT = process.env.PORT || 5000;

dbConnection(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
