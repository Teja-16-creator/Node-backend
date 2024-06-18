const express = require('express');
const app = express();
app.get('/',function(req,res)
{
    res.send("teja");
})
app.listen(3000,function(){
    console.log("success");

})

