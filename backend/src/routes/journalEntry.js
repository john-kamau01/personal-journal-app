const express = require("express");
const {createEntry, getEntries, updateEntry, deleteEntry} = require("../controllers/journalEntry");
const verifyToken = require("../middleware/auth");
const router = express.Router();

router.post("/", verifyToken, createEntry);
router.get("/", verifyToken, getEntries);
router.put("/:id", verifyToken, updateEntry);
router.delete("/:id", verifyToken, deleteEntry);

module.exports = router;