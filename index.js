const express = require('express');
const port = 8000;
const app = express();
app.listen(port,(error)=>{
    if(error){
        console.log(`got an error on port: ${port}`);
    }
    console.log(`the server is running on port: ${port}`);
})