const express = require("express");
const cors = require("cors");
const port = 8000;

// requiring / importing runs the file!
// This file doesn't need to export anything.
require("./config/mongoose.config");
// app is a function but it also has key value pairs on it like an object.
const app = express();

// app.use adds middleware
// something that happens between the request and the response

// avoid CORS errors since our front-end is running on a different port
// so our requests are 'cross origin' port 3000 -> 8000
app.use(cors()); 

app.use(express.json(), express.urlencoded({extended: true}));

app.get("/api/testing", (req,res)=>{
    return res.json("testing")
})

const destinationRoutes = require("./routes/destination.routes");
destinationRoutes(app);

app.listen(port, () => {
    console.log(`Listening on port ${port} for requests to respond to.`)
})