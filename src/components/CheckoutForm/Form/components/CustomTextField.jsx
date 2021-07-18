import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Grid, TextField } from "@material-ui/core";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        name={name}
        label={label}
        required={required}
        control={control}
        fullwidth
      />
    </Grid>
  );
};

export default FormInput;
