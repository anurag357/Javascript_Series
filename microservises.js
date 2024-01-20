//product order
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const port = 3001;

app.use(bodyParser.json())

//product Servis
app.get('/product/:productID', (req, res)=>{
    const productID = req.params.productID;
    const product = {id:productID, name:'productName', price: 50};
    res.json(product);
});

//order servis
app.post('/orders', (req,res)=>{
    const productID = req.body.productID;
    const order = {orderID:123, productID, quantity:2 total: 100.00};
    res.json(order)
});

app.get('/orders/:orderId', async(req, res)=>{
    const orderID = req.params.orderID;
    const orderResponce = await axios.get(`url:orders/${orderID}`)
    const productID = orderResponce.data.productID;
    const productResponce = await axios.get(`url:products/${productID}`);
    
    const combindResponce = {
        order:orderResponce.data,
        product:productResponce.data,
    }
    res.json(combindResponce)
})

app.listen(port, ()=>{
    console.log(`port on listning on this ${port}`)
});