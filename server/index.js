// import connection from './db'
// import tasks from "./routes/tasks"
// import express from "express";
// import cors from "cors"

const connection = require('./db');
const cors = require('cors');
const tasks = require('./routes/tasks');
const express = require('express');

const app = express();

connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks",tasks);

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`listening on port ${port}...`))
