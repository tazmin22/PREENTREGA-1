const {Router} = require('express')
const {PManager} = require ("../ProductManager")
const router = Router();

const productManager = new PManager ("./prueba.json")

router
.get ("/" ,async (req, res) => {
    const products = await productManager.getProducts();
    res.status(200).send({
        status:"sucess",
        payload: products
    }
    )
})
.get ("/:pid" , async (req, res) => {
    const {pid} = req.params
    const productos = await productManager.getProductsById(parseInt(pid))
    if (!productos){
        return res.status(400).send({error: 'Se produjo un error al recuperar productos.'})
    }
    res.send({productos});
    
})

.post ("/" , (req, res) => {
    res.send("post product ");
})
.put ("/:pid" , (req, res) => {
    const {pid} = req.params
    res.send("put product "+ pid);
})
.delete ("/:pid" , (req, res) => {
    const {pid} = req.params
    res.send("delete product "+ pid);
})

module.exports = router