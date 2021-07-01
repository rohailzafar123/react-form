import React from "react";
import { makeStyles, createStyles, Grid } from "@material-ui/core";
import { Chart } from "../Charts";
const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: "#FFFFFF",
      padding: "15px",
      boxShadow: " 0px 4px 32px #0000000D",
      borderRadius: "12px",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      flexDirection: "column",
      width: "100%",
    },
    cardHead: {
      width: "100%",
      textAlign: "center",
      backgroundColor: "#0000000D",
      borderRadius: "7px",
      padding: "0px 10px",
    },
    title: {
      color: "#25274D",
      margin: "0px",
      fontSize: "16px",
      fontWeight: "bold",
      padding: "0px",
      textAlign: "left",
    },
    subtitle: {
      color: "#3E4C65",
      textTransform: "capitalize",
      fontSize: "18px",
    },
    chip: {
      width: "40px",
      height: "15px",
      boxShadow: " 0px 4px 32px #0000000D",
      borderRadius: "30px",
      marginRight: "20px",
    },
    chipWithTextContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: "10px",
    },
  })
);

export const ValuableAdCard = ({ datapoints, total }) => {
  const classes = useStyles();

  // const total = datapoints.key[11].value / e.value;
  // const result = Math.round(total * pr);
  // let value = 100 - result;
  return (
    <div className={classes.card}>
      <h1
        style={{ color: "#3E4C65", textTransform: "capitalize" }}
      >Most Valuable Ad Type?</h1>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Chart
            colorScale={[
              "#F8D55E",
              "#EDA0A4",
              "#1E39A9",
              "#7BCFCF",
              "rgb(255, 69, 96)",
              "#3E4C65",
            ]}
            data={[
              { x: "Dynamic Ads", y: datapoints?.key[5]?.value, },
              { x: "Social Proof", y:    datapoints?.key[6]?.value, },
              { x: "Lifestyle", y:   datapoints?.key[7]?.value, },
              { x: "Product Demo", y:   datapoints?.key[8]?.value, },
              { x: "Spokesperson Anchor", y:  datapoints?.key[9]?.value, },
              { x: "Unboxing", y:   datapoints?.key[12]?.value, },
            ]}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          {datapoints &&
            datapoints?.key?.length &&
            datapoints.key.map((e, i) => {
              if (e.name === "dynamic_ads_views") {
                var color = "#F8D55E";
              } else if (e.name === "social_proof_views") {
                color = "#EDA0A4";
              } else if (e.name === "Product_Demo_views") {
                color = "#7BCFCF";
              } else if (e.name === "lifestyle_views") {
                color = "#1E39A9";
              } else if (e.name === "Spokesperson Anchor Views") {
                color = "rgb(255, 69, 96)";
              } else if (e.name === "Case Study Views") {
                color = "#feb019";
              } else if (e.name === "Unboxing") {
                color = "#3E4C65";
              } else {
                color = "grey";
              }
              if ((i >= 5 && i <= 10 && e.value > 0) || i === 12) {

                return (
                  <>
                    <div key={i} className={classes.chipWithTextContainer}>
                      <div
                        className={classes.chip}
                        style={{ backgroundColor: color }}
                      ></div>
                      <h5 className={classes.title}> {
                        e?.name === "dynamic_ads_views"
                          ? "Dynamic Ads"
                          : e?.name === "social_proof_views"
                            ? "Social Proof"
                            : e?.name === "Product_Demo_views"
                              ? "Product Demo"
                              : e?.name === "lifestyle_views"
                                ? "Lifestyle"
                                : e?.name === "Spokesperson Anchor Views"
                                  ? "Spokesperson Anchor"
                                  : e?.name === "Case Study Views"
                                    ? "Case Study"
                                    : e?.name}</h5>
                    </div>
                  </>
                )
              }else{
                return null
              }
            })
          }
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          {datapoints &&
            datapoints?.key?.length &&
            datapoints.key.map((e, i) => {
              if ((i >= 5 && i <= 10 && e.value > 0) || i === 12) {
                let pr = 100;
                const total = datapoints.key[11].value / e.value;
                const result = Math.round(total * pr);
                let value = 100 - result;
                if (value !== 0 && value !== Number.POSITIVE_INFINITY && value !== Number.NEGATIVE_INFINITY) {
                  return (
                    <p
                      key={i}
                      className={classes.subtitle}
                      style={{
                        color: value < 0 ? "#C11F1F" : "#008000",
                      }}
                    >
                      {value === 0 &&
                        "No Uplift OR Decrease in Performance"}
                      {(value > 0 || value < 0) && (
                        <>
                          {value}%{" "}
                          {value < 0
                            ? "Decrease in Performance"
                            : "Uplift in Performance"}
                        </>
                      )}
                    </p>

                  )
                }else {
                  return null
                }
              }else{
                return null
              }
            })
          }
        </Grid>
      </Grid>
    </div>
  );
};
