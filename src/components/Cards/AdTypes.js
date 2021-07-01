import React from "react";
import {
  makeStyles,
  createStyles,
  Grid,
} from "@material-ui/core";
import {SwitchBtn} from "../Form";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      backgroundColor: "#ffffff",
      borderRadius: 20,
      borderColor: "#d3d3d3",
      borderWidth: 1,
      borderStyle: "solid",
      padding: "25px 35px",
      width:"100%"
    },
    border: {
      borderColor: "#d3d3d3",
      borderWidth: 1,
      borderStyle: "solid",
      padding: 2,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
    },
  })
);


export default function AdTypes({ typeState, setTypeState }) {
  const classes = useStyles();
  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  //   qrsftb: typeState?.qrsftb,
  //   pcg: false,
  //   qq: false,
  // });
  // const total = datapoints.key[11].value / e.value;
  // const result = Math.round(total * pr);
  // let value = 100 - result;

  const handleChange = (event) => {
    console.log(event.target.name);
    setTypeState({ ...typeState, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Grid container className={classes.card}>
        <Grid item lg={12} md={8} sm={6} xs={12}>
          <p style={{ color: "black" }}>
            <b>What type of ad Copy you want?</b>
          </p>
          <div className={classes.row}>
            <SwitchBtn
              checked={typeState.qrsftb}
              onChange={handleChange}
              name="qrsftb"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <p style={{ marginBottom: 0  , paddingLeft:"10px"}}>
              Quote/Review simulation + Feature to Benefit
            </p>
          </div>
          <div className={classes.row}>
            <SwitchBtn
              checked={typeState.pcg}
              onChange={handleChange}
              color="primary"
              name="pcg"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <p style={{ marginBottom: 0   , paddingLeft:"10px"}}>Pain x Gain x Claim </p>
          </div>
          <div className={classes.row}>
            <SwitchBtn
              checked={typeState.qq}
              onChange={handleChange}
              color="primary"
              name="qq"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <p style={{ marginBottom: 0  , paddingLeft:"10px" }}>Qualifying Question</p>
          </div>
          {/* <div className={classes.row}>
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          color="primary"
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <p style={{marginBottom:0}}>Value proposition</p>
      </div> */}
        </Grid>
      </Grid>
    </div>
  );
}
