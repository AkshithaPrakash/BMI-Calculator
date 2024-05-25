import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";

const InputField = ({ label, value, onChange, unit }) => {
  return (
    <div className="form-group">
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
        }}
        required
      />
    </div>
  );
};

export default InputField;
