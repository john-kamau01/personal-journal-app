const db = require("../config/db");

// Create Entry
exports.createEntry = (req, res) => {
    const {title, content, category, date} = req.body;
    const userId = req.userId;

    db.query(
        "INSERT INTO journal_entries (title, content, category, date, user_id) VALUES (?, ?, ?, ?, ?)",
        [title, content, category, date, userId],
        (err, result) => {
            if(err){
                return res.status(500).send({message: err.message});
            }
            res.send({id: result.insertId, title, content, category, date, user_id: userId});
        }
    )
}

// Get Entries
exports.getEntries = (req, res) => {
    const userId = req.userId;

    db.query(
        "SELECT * FROM journal_entries WHERE user_id = ?",
        [userId],
        (err, results) => {
            if(err){
                return res.status(500).send({message: err.message});
            }
            res.send(results);
        }
    )
}

// Update Entry
exports.updateEntry = (req, res) => {
    const {id} = req.params;
    const {title, content, category, date} = req.body;
    const userId = req.userId;

    db.query(
        "UPDATE journal_entries SET title = ?, content = ?, category = ?, date = ? WHERE id = ? AND user_id = ?",
        [title, content, category, date, id, userId],
        (err, result) => {
            if(err){
                return res.status(500).send({message:err.message});
            }
            if(result.affectedRows === 0){
                return res.status(404).send({message: "Entry not found!"});
            }
            res.send({id, title, content, category, date, user_id:userId});
        }
    )
}

// DELETE ENTRY
exports.deleteEntry = (req, res) => {
    const {id} = req.params;
    const userId = req.userId;

    db.query(
        "DELETE FROM journal_entries WHERE id = ? AND user_id = ?",
        [id, userId],
        (err, result) => {
            if(err){
                return res.status(500).send({message: err.message});
            }
            if(result.affectedRows === 0){
                return res.status(404).send({message: "Entry not found!"});
            }
            res.send({message:"Entry deleted successfully!"});
        }
    )
}