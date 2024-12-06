const express = require("express");
const cors = require("cors");
const app = express();
const port=3000;

app.use(express.json());
app.use(cors());

const products=[];

app.post('/api/addproduct',(req,res)=>{
    const {name,price}=req.body;

    if(!name||!price){
        return res.status(400).json({message:"info required !"})
    }
    const produit={name,price};

    products.push(produit);

    res.status(201).json(produit);
});

app.get('/api/productList',(req,res)=>{
    res.json(products);
});



app.listen(port,()=>{
    console.log("server runing...");
})
