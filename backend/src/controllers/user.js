// This is the controller for user
const db = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const {username, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    db.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, hashedPassword],
        (err, result) => {
            if(err){
                return res.status(500).send({message: err.message});
            }

            res.send({message: "User registered successfully!"});
        }
    );
};


exports.login = (req, res) => {
    const {username, password} = req.body;

    db.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        (err, result) => {
            if(err){
                return res.status(500).send({message: err.message});
            }

            if(result.length === 0){
                return res.status(404).send({message: "User not found!"});
            }

            const user = result[0];
            const passwordIsValid = bcrypt.compareSync(password, user.password);

            if(!passwordIsValid){
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!",
                });
            }

            const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                id: user.id,
                username: user.username,
                accessToken: token,
            });
        }
    );
}