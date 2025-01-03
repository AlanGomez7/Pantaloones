import { Box, Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { configApi, createPaymentIntentApi } from "../../api/paymentApi";
import CheckoutForm from "./StripePayment";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CashOnDelivery from "./CashOnDelivery";

const stripePromise = loadStripe(import.meta.env.VITE_KEY);

function PaymentWrapper() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [clientSecret, setclientSecret] = useState();
console.log(paymentMethod)
  const createPaymentIntent = async () => {
    try {
      const res = await createPaymentIntentApi();
      const { client_secret } = res?.data;
      setclientSecret(client_secret);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  return (
    <Box>
      <Typography variant="h6" className="bg-gray-200 p-3">
        Payment
      </Typography>

      <CashOnDelivery isCod={paymentMethod === "cod"} onSelect={()=>setPaymentMethod("cod")} />
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm isCod={paymentMethod === "stripePayment"} onSelect={()=>setPaymentMethod("stripePayment")}/>
        </Elements>
      )}
    </Box>
  );
}

export default PaymentWrapper;
