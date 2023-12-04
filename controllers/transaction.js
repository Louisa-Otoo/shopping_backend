const Transaction = require('../model/transaction')
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// create payment intent
  exports.createPaymentIntent = async (req, res) => {
    try {
      const { amount, currency } = req.body

      const paymentIntent = await stripe.paymentIntents.create({
        currency: currency,
        amount: amount,
        automatic_payment_methods: { enabled: true },
      });
  
      // Send publishable key and PaymentIntent details to client
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (e) {
      return res.status(400).send({
        error: {
          message: e.message,
        },
      });
    }
  };

  
  // create payment config 
  exports.stripeConfig = async (req, res) => {
    try {
      res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      });
    } catch (e) {
      return res.status(400).send({
        error: {
          message: e.message,
        }
      })
    }  
  };
  

