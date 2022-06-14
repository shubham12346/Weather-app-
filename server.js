const express = require('express');
const request = require('requests');
const https = require("https");
const bodyparser = require('body-parser');
const app = express();

// app.get("/",function(req,res)
// {
//     const city = "rajkot";
//     const unit = "metric";
//     const api="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=0d6f766500df5adb8d41801c2509220c&units="+unit;

//     https.get(api,function(response)
//     {
//         // var ArrObj =[response];
       
//         // console.log(ArrObj);
//         response.on("data",function(data)
//         {
//             var objDAta = JSON.parse(data);
//             var arrData = [objDAta];
//             console.log(arrData);
//             console.log(arrData[0].main.temp);
//             const icon = arrData[0].icon;
//             const imageUrl = "http://openweathermap.org/img/wn/"+icon +"@2x.png";
//             res.writeHead(200,{'Content-type' : 'text/html'});
//             res.write("<h1> The temperture is  "+arrData[0].main.temp+"</h1>");
//             res.write(" <img src ="+imageUrl+" >")
//             res.send();
           

//         })
//     })

 

// })

app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    const city = "rajkot";
    const unit = "metric";
    const api="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=0d6f766500df5adb8d41801c2509220c&units="+unit;

    res.sendFile(__dirname+"/index.html");
  

})
  app.post("/",function(req,res)
    {
        console.log(req.body.cityName);
     const city = req.body.cityName;
    const unit = "metric";
    const api="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=0d6f766500df5adb8d41801c2509220c&units="+unit;
    https.get(api,function(resdata)
    {
        resdata.on("data",function(data)
        {
            var ObjData = JSON.parse(data);
            var Arrdata = [ObjData];
            var temp =Arrdata[0].main.temp;
            res.write("<h1> Your City Temperature is "+temp+"</h1>");
            res.send();
        })
    })

    })



app.listen(3000,function()
{
    console.log("Yur server in running at port number : 3000");
})