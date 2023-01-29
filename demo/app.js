const express = require('express');

const app = express();

const portNumber = 3000;

//homepage routing
//getting data

app.get("/",(req,res)=>{
    res.write(`<html>
    <body>
    <h2> Hello </h2>
    </body>
    </html>`);
    res.send();
});

app.get("/aboutUs",(req,res)=>{
    res.send("welcome to about us");
});

app.get("/contactUs",(req,res)=>{
    res.send("welcome to contact us");
});
app.listen(portNumber,()=>{
    console.log(`Listening to port number : ${portNumber}`);
})



