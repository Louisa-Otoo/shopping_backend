const Transaction = require('../controllers/transaction')
const router = require('express').Router();


// transaction config 
router.get('/v1/config', (req, res) => {
    Transaction.stripeConfig(req, res);
});


//create payment intent 
router.post('/v1/create-payment-intent', (req, res) => {
    Transaction.createPaymentIntent(req, res);
});


module.exports = router;