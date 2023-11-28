const {Router} = require('express')
const CartsManagerFile = require ("../CartsManager.js")
const cartsService = new CartsManagerFile

const router = Router();



router.get('/:cid', async (req,res)=>{
    try {
        const {cid} = req.params
        const cart = await cartsService.getCartById(parseInt(cid))
        res.send({
            status: 'success',
            payload: cart
        })
        
    } catch (error) {
        console.log("error")
    }
})

module.exports = router