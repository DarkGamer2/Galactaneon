import {useCheckout} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const checkout = useCheckout();
  console.log(checkout);
  return (
    <pre>
      {JSON.stringify(checkout.lineItems, null, 2)}
    </pre>
  )
};

export default CheckoutForm;