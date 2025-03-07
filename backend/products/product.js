import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const STRIPE_KEY = process.env.STRIPE_KEY;
const stripe = new Stripe(`${STRIPE_KEY}`);


    const products = await stripe.products.create({
        name: "Kon-Mania",
        description: "Day Pass to event ticket",
        images: ["https://aznewtoys.com/cdn/shop/files/FullSizeRender_d4c52c80-b811-4668-b15e-8fa7fe978762.jpg?v=1730503971&width=1445"]
    });

    const price = await stripe.prices.create({
        product: products.id,
        unit_amount: 14000,
        currency: "usd"
    });

    console.log(price);

