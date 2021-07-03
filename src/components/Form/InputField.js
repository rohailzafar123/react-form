import React from "react";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MuiPhoneNumber from "material-ui-phone-number";

const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      input: {
        padding: "20px",
        fontSize: "15px",

        "&::placeholder": {
          color: "#8F8D8D",
          opacity: "1",
          fontSize: "12px",
        },
      },
    },
  },
});

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  root: {
    backgroundColor: "#f7f7f7",
    borderRadius: "11px",
    fontSize: '12px',
  },
  lable: {
    "& .MuiFormLabel-root": {
      fontSize: "12px", // or black
    },
    '& label.Mui-focused': {
      color: '#00EFD4',
    },
  },
  classOne: {
    textTransform: 'lowercase',
    '& > :first-letter': {
      textTransform: 'capitalize'
    }
  },
});
export const InputField = (props) => {
  const classes = useStyles();

  return (
    props.type == 'phone-num' ? (

      <MuiPhoneNumber
        name={props.name}
        data-cy="user-phone"
        defaultCountry={props.defaultCountry}
        error={props.error}
        className={classes.lable}
        id="standard-basic"
        helperText={props.errorText}
        InputProps={{ className: classes.root, classes }}
        label={props.label}
        inputProps={{    required: true,
        }}
        type={props.type}
        disableUnderline
        value={props.value}
        variant={props.error ? "outlined" : "filled"} // outlined
        placeholder={props.placeholder}
        fullWidth
        autoComplete
        required={props.required}
        onChange={(e) => props?.onChange(e)}
        multiline={props.multiline}
        rows={props.rows}
        disabled={props.disabled}

      // value={this.state.phone}
      // onChange={this.handlePhoneChange}
      />
    )
      : (


        < TextField
          error={props.error}
          className={classes.lable}
          id="standard-basic"
          helperText={props.errorText}
          InputProps={{ className: classes.root, classes }}
          label={props.label}
          type={props.type}
          disableUnderline
          value={props.value}
          variant={props.error ? "outlined" : "filled"} // outlined
          placeholder={props.placeholder}
          fullWidth
          autoComplete
          required={props.required}
          onChange={(e) => props?.onChange(e)}
          multiline={props.multiline}
          rows={props.rows}
          disabled={props.disabled}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        // onChange={(e) => props?.onChange(e)}
        // id={props.id}
        />
      )
  );

};
