const express = require('express')
const {PManager} = require ("./ProductManager")
const productsRouter = require ("./routes/products.router.js")
const cartsRouter = require ("./routes/carts.router.js")

const app = express()
const port = 8080


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/products/', productsRouter)
app.use('/api/carts/', cartsRouter)
app.use(( err, req, res, next)=>{
  console.error(err.stack)
  res.status(500).send('Error de server')
})

app.listen(port, () => {
  console.log(`Server funciona en port ${port}`);
});