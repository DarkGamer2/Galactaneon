import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import Stripe from "stripe";
import authRoutes from './routes/authRoutes';
const app = express();
dotenv.config();
const PORT = 4600;
const stripe=new Stripe(process.env.STRIPE_KEY);
const product_id=process.env.STRIPE_PRICE_ID;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
app.use(cors());
app.use(cookieParser());


app.post('/api/session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price: product_id,
                    quantity: 1
                }
            ],
            success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`
        });
        console.log("Session created",session)
        return res.json({ url: session.url });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/my-webhook',express.raw({type: 'application/json'}), async (req, res) => {
    try{
        const sig = req.headers['stripe-signature'];
        const event=stripe.webhooks.constructEvent(req.body,sig,process.env.STRIPE_WEBHOOK_SECRET);
        if(event.type==="checkout.session.completed"){
            console.log("Payment was successful");
        }
        else{
            console.log("Payment was not successful");
        }
        return res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        return res.sendStatus(400);
    }
});

app.use("/api/auth", authRoutes);
app.listen(PORT, () => console.log(`Server is connected to PORT: ${PORT}`));
