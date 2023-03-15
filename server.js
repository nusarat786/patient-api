// importing express
const express = require("express");

//importing body parser
const bodyParser = require("body-parser");

//importing dot env
const dotenv = require("dotenv");

// importing database connection method
const connectDatabase = require("./DB/dtabase");

// importing patient route
const patientRoute = require("./Routes/patientRoute");



// configer env file
dotenv.config({ path: "./DB/config.env" });

const app = express();


// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// use express.json
app.use(express.json());


// calling database connection method
connectDatabase();


//attaching patient  route
app.use("/patient", patientRoute);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
