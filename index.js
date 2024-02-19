const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const hostname = '127.0.0.1';

app.get ('/', (req, res)=>{
    res.sendFile(__dirname + "/Pages/index.html")
})
app.get('/circle', (req, res)=>{
    res.sendFile(__dirname + "/Pages/circle.html")
})
app.get('/triangle', (req, res)=>{
    res.sendFile(__dirname + "/Pages/triangle.html")
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/circle', (req, res)=>{
    const radius = req.body.radius;
    const area = Math.PI * radius * radius ;
    res.send(` Area of Circle is : ${area}`)
})

app.post('/triangle', (req, res)=>{
    const base = req.body.base;
    const height = req.body.height;
    const area = 0.5 * base * height;
    res.send(`Area of Triangle is : ${area}`)
})

app.listen(port, hostname, (req, res)=>{
    console.log(`Server is running successfully at http://${hostname}:${port}`)
})