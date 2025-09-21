const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from dummy Node.js service 🚀");
});

app.listen(PORT, () => {
  console.log(`Dummy service running on http://localhost:${PORT}`);
});
