const express = require("express");
const app = express();
app.get("*", (r, rs) => rs.send("Naber"));
app.get("/", (r, rs) => rs.send("Naber"));
app.post("*", (r, rs) => rs.send("Naber"));
app.listen(3000,()=>{
    console.log("http://localhost:3000")
});
//require("./app")