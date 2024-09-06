const express = require("express");
const port = 1010;
const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded());

app.use("/",require("./routes"));


app.listen(port, (err) => {
    if (err) {
        console.error("Server error:", err);
    } else {
        console.log(`Server started on http://localhost:${port}`);
    }
});