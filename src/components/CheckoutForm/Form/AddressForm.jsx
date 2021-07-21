import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import FormInput from "./components/CustomTextField";
import { commerce } from "../../../lib/commerce";

function AddressForm({ checkoutToken, next }) {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  //Countries Selection=====================================================
  //convert countries object to array
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  useEffect(() => {
    const fetchCountries = async (checkoutToken) => {
      const { countries } = await commerce.services.localeListCountries(
        checkoutToken
      );
      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0]);
    };

    fetchCountries(checkoutToken);
  }, []);

  //subdivisions Selection=====================================================
  //convert supdivision object to array
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  useEffect(() => {
    const fetchSubdivision = async (shippingSubdivision) => {
      const { subdivisions } = await commerce.services.localeListSubdivisions(
        shippingCountry
      );
      setShippingSubdivisions(subdivisions);
      setShippingSubdivision(Object.keys(subdivisions)[0]);
    };

    if (shippingCountry) fetchSubdivision(shippingCountry);
  }, [shippingCountry]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({ ...data, shippingCountry, shippingSubdivision })
          )}
        >
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="phoneNumber" label="Phone number" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="address1" label="Address" />
            {/* <FormInput required name="zip" label="Zip / Postal code" /> */}

            {/* Shipping country */}
            <Grid item xs={12} sm={6}>
              <InputLabel>Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* Shipping subvision */}
            <Grid item xs={12} sm={6}>
              <InputLabel>City</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>

          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              to="/cart"
              type="button"
              variant="contained"
              color="inherit"
            >
              Back to cart
            </Button>

            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export default AddressForm;
