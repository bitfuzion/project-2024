const app=require('express');
const app=express();
const PORT=8080;

app.request(express.json())
app.get('/tshirt', (req,res) =>{
    res.status(200).send({
        tshirt:'oo',
        size:'large'
    })
});

app.post('/tshirt/:id',(req,res) => {
    const {id} =req.params;
    const {logo} =req.body;
    if(!logo){
        res.status(418).send({message:"no logo needed"})
    }
    res.send({
        tshirt:`oo with ${logo} and ${id}`,
    });
});