const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: "*"
}))
app.get('/api/error/:status',(req,res)=>{
    const status= req.params.status
        res.status(status).send(`Status ${status}`);
});
app.post('/api/error/:status',(req,res)=>{
    const status= req.params.status
        res.status(status).json(
          {  username: "abc",
                password: "test"
});
});
app.get('/api/error/500/:uuid',(req,res)=>{
        res.status(500).send(`OK `);
});

const port= process.env.PORT || 4000;
app.listen(port, () =>console.log(`port ${port}`)  )
