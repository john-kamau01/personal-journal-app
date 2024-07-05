const express = require("express");
const bodyparser = require("body-parser");
const userRoutes = require("./routes/user");
const journalEntryRoutes = require("./routes/journalEntry");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(bodyparser.json());
app.use("/api/auth", userRoutes);
app.use("/api/journal", journalEntryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port  ${PORT}...`);
});