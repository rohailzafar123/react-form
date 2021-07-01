import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { ModalComponent } from "../";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "250px",
    backgroundColor: "#fff",
    padding: "40px",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "&:hover": {
     backgroundColor:"#d0e2f5"
    },
  },
  subtitle: {
    fontSize: "12px",
    color: "#9A9BA1",
    letterSpacing: "0px",
    textAlign: "center",
  },
}));

export const MenuCard = (props) => {
  const classes = useStyles();
  const [isSelected, setSelected] = useState(false);
  const [step1Modal, setStep1Modal] = useState(false);

  const handleSelect = () => {
    setSelected(!isSelected);
    setStep1Modal(true);
  };

  return (
    <>
      <ModalComponent
        step="Step 1"
        modal={step1Modal}
        title="What will your new Ad be?"
        subtitle="What's your Landing Page URL?"
        setModal={setStep1Modal}
        type={props.type}
        template={props.template}
        showTemplateType={props.showTemplateType}
      />
      <div className={classes.card} onClick={handleSelect}>
        <div>{props.logo}</div>
        <br />
        <h4>{props.title}</h4>
        <p className={classes.subtitle}> {props.subtitle} </p>
        <br />
      </div>
    </>
  );
};
