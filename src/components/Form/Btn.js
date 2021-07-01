import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  Button,
  CircularProgress,
} from "@material-ui/core";
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "8px",
        padding: "8px 12px",
        boxShadow: "none",
        fontfamily: "ProductSans",
        height: "auto",
      },
      label: {
        fontSize: "14px",
        letterSpacing: "0px",
        textTransform: "capitalize",
        fontfamily: "ProductSans",
      },
    },
  },
});
export const Btn = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        htmlFor={props.id}
        variant="contained"
        disabled={props.disabled}
        style={{
          backgroundColor: props.bgcolor,
          color: props.color,
          fontWeight: "bold",
          fontfamily: "ProductSans",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 10px",
          borderRadius:"8px"
        }}
        fullWidth
      >
        <div style={{ paddingRight: "10px" , margin:"0px" }}>{props.icon}</div>
          {!props.load ? (
            props.value
          ) : (
            <CircularProgress color="primary" size={24} />
          )}
      </Button>
    </ThemeProvider>
  );
};
