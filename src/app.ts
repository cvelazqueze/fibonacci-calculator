import express from 'express';
import { getNumber } from './Controllers/FibonacciController';


const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.send('Welcome to Fibonacci Calculator');
});

app.get('/:num',(req,res) =>{
    res.send(getNumber(req.params.num))
})

app.listen(port,()=>{
    return console.log(`server is listening on ${port}`);
})