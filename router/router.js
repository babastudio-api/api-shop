const productsController = require('../controller/productsController')
const userController = require('../controller/userController')
const cartController = require('../controller/cartController')
const auth = require('../middleware/auth.js')

module.exports = app => {
    app.get('/', productsController.home)

    //api products
    app.get('/products', auth.verifyToken , productsController.listProduct)
    app.get('/products/:id', auth.verifyToken , productsController.detailProduct)
    app.post('/products/', auth.verifyToken , productsController.tambahProduct)
    app.put('/products/:id', auth.verifyToken , productsController.ubahProduct)
    app.delete('/products/:id', auth.verifyToken , productsController.hapusProduct)

    //api users
    app.get('/user', userController.listUser)
    app.get('/user/:id', userController.detailUser)
    app.post('/user/', userController.tambahUser)
    app.put('/user/:id', userController.ubahUser)
    app.delete('/user/:id', userController.hapusUser)

    //api cart
    app.post('/cart/:id', cartController.addToCart)
    app.get('/cart/:id', cartController.showCart)
    app.put('/cart/:id', cartController.editCart)
    app.delete('/cart/:id', cartController.deleteCart)
    app.get('/cart/remove/:id', cartController.removeCart)

    //checkOut
    app.get('/cart/checkout/:id', cartController.checkOut)

    //get token
    app.post('/gettoken', userController.getToken) 
}