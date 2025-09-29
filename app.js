const express = require('express');
const app = express();

app.use('/public', express.static('public'));
app.set('trust proxy', true); //this is to make the real ips come through


app.get("/",function(req,res){
	res.sendFile(__dirname+"/public/index.html");
});



app.listen(5000);
