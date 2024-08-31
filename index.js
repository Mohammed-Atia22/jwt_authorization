const express = require('express');
const app = express();
const {authpage,authcourse} = require('./middlewares');

app.use(express.json());

app.get("/home",(req,res)=>{
    res.json('home page');
});

app.get('/course/grades',authpage(['teacher','admin']),(req,res)=>{
    res.json({
        pedro:100,
        paulo:80,
        leo:50,
        colin:40
    });
});

app.get('/course/:number',authcourse,(req,res)=>{
    const coursenumber = req.params.number;
    res.json(`you have permission to see course ${coursenumber}`);
});

app.listen(3001,()=>{
    console.log('server running on port 3001');
})