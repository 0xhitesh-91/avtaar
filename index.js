const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json()); // req.body

//Routes

// Add a user

app.post('/addUser', async(req, res) => {
    try {
        const {name, gender, email} = req.body;
        const newUser = await pool.query('INSERT INTO users(name, gender, email) VALUES($1, $2, $3) RETURNING *;',
        [name, gender, email]);

        res.json(newUser.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

// Add event for a user

app.post('/addEvent', async(req, res) => {
    try {
        const { uid, name, occurrence, startdate, enddate} = req.body;
        const addEvent = await pool.query('INSERT INTO events(uid, name, occurrence, startdate, enddate) VALUES($1, $2, $3, $4, $5) RETURNING *;',
        [uid, name, occurrence, startdate, enddate]);

        res.json(addEvent.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

// Get all users

app.get('/getUsers', async(req, res) => {
    try {
        const getUsers = await pool.query('SELECT * FROM users;');

        res.json(getUsers.rows);
    } catch (err) {
        console.log(err.message);
    }
})

// Get all events

app.get('/getEvents', async(req, res) => {
	try {
		const getEvents = await pool.query('SELECT * FROM events;');
		res.json(getEvents.rows);
	} catch (err) {
		console.log(err.message);
	}
})

// Default page

app.get('/', async(req, res) => {
	try {
		const message = "Welcome to AVTAAR Assignment two:<br><br>Base URL: localhost:3000<br>Sub URLs: <br>/addUser<br>/addEvent<br>/getUsers<br>/getEvents";
		res.send(message);
	} catch (err) {
		console.log(err.message);
	}
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})
