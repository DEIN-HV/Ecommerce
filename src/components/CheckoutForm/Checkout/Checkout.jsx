import React, { useState } from "react";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useStyle from "./style";
import AddressForm from "../Form/AddressForm";
import PaymentForm from "../Form/PaymentForm";
import { useEffect } from "react";
import { commerce } from "../../../lib/commerce";

const steps = ["Shipping address", "Payment detail"];

function Checkout({ cart, order, onCaptureCheckout, errorMessage }) {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyle();
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setshippingData] = useState({});

  useEffect(() => {
    const fetchCheckoutToken = async () => {
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      });
      setCheckoutToken(token);
      // console.log("token;", token);
    };

    fetchCheckoutToken();
  }, [cart]);

  const nextStep = () => setActiveStep((preActiveStep) => preActiveStep + 1);
  const backStep = () => setActiveStep((preActiveStep) => preActiveStep - 1);

  const next = (data) => {
    setshippingData(data);
    nextStep();
    console.log("shipping data", data);
  };

  const Form = () => {
    return activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        onCaptureCheckout={onCaptureCheckout}
        onNextStep={nextStep}
      />
    );
  };

  const Confirmation = () => <div>Confimation</div>;

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Check out
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
}

export default Checkout;
