const express = require('express')
const router = express.Router();


const {
    getProduct,
    newProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    getAdminProducts,
    createProductReview,
    getProductReviews,
    deleteReview


} = require('../controllers/productControllers')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')



//USERS ROUTES
router.route('/products').get(getProduct);
router.route('/product/:id').get(getSingleProduct);


//ADMIN ROUTES
router.route('/admin/products').get(getAdminProducts);
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);
router.route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);


//REVIEW ROUTES
router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews').get(isAuthenticatedUser, getProductReviews)
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)
module.exports = router;