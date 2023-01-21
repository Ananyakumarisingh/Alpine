const express = require("express");
const connectToMongo = require("./config/db");
const userRouter = require("./routes/user_routes");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use("/alpine/user",userRouter);

app.get("/alpine/", (req, res) => {
    res.send("Welcome");
});

app.listen(PORT,async()=>{
    try {
        await connectToMongo();
        console.log(`Running @ PORT ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})
