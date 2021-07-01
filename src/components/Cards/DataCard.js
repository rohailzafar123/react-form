import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "40px",
    },
    card: {
      backgroundColor: "#FFFFFF",
      padding: "10px 10px 0px 10px",
      boxShadow: " 0px 4px 32px #0000000D",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width:"100%"
    },
    cardHead: {
      width: "100%",
      textAlign: "center",
      backgroundColor: "#0000000D",
      borderRadius: "7px",
      padding: "0px 10px",

    },
    title: {
      color: "#383F51",
      margin: "0px",
      fontSize: "20px",
      fontWeight: "bold",
      padding:"20px",
    },
    subtitle: {
      color: "#3E4C65",
      textTransform: "capitalize",
      fontSize: "14px",
    },
  })
);
export const DataCard = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.cardHead}>
          <p className={classes.subtitle}>{props.title}</p>
        </div>
        <div className={classes.title}>{props.data}</div>
      </div>
    </div>
  );
};
