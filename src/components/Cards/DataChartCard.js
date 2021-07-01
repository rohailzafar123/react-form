import React from "react";
import { makeStyles, createStyles, Grid } from "@material-ui/core";
import { Chart } from '../Charts';
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
      textAlign: "left",
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
      height: "40px",
      boxShadow: " 0px 4px 32px #0000000D",
      borderRadius: "10px",
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

export const DataChartCard = ({ e, i, t, totalViews }) => {
  const classes = useStyles();

  // console.log(e)

  return (
    <div className={classes.card}>
      <h1 style={{ color: "#3E4C65", textTransform: "capitalize" }}>
        {i === 0
          ? "Ad Type"
          : i === 1
            ? "Highly edited videos vs raw cuts"
            : i === 2
              ? " Average Headline "
              : i === 3
                ? " Average Word Count for Headline Text"
                : i === 4
                  ? "Should you offer a Discount on your ads? "
                  : i === 5
                    ? "Should you add a Testimonial to your ads? "
                    : i === 6
                      ? "Should you offer free shipping on your ads?"
                      : i === 7
                        ? "Should you offer Free Shipping?"
                        : i === 8
                          ? "How Many Ads Use “!” On Their Headline Copy?"
                          : i === 9
                            ? "Should you send users to a Homepage URL?"
                            : i === 10
                              ? "How Many Ads Have Their Landing Page URL In The Primary Text Copy?"
                              : i === 11
                                ? "Should you use the Description Copy?"
                                : i === 12
                                  ? " How Many Ads Mention “®” Or “™” In Their Copy?"
                                  : i === 17
                                    ? " How Many Ads Use The Word “You” In Their Copy?"
                                    : ""}
      </h1>
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
            colorScale={["#F6D35E", "#7FD7D7"]}
            data={
              i === 4 ||
                i === 5 ||
                i === 6 ||
                i === 7 ||
                i === 9 ||
                i === 11 ?

                [
                  { x: e?.key[0].name, y: e?.key[0].actualValue >= 0 ? e?.key[0].actualValue : 0 },
                  { x: e?.key[1].name, y: e?.key[1].actualValue >= 0 ? e?.key[1].actualValue : 0 },
                ] :
                [
                  { x: e?.key[0].name, y: Math.round(e?.key[0]?.value / t) * 100 },
                  { x: e?.key[1].name, y: Math.round(e?.key[0]?.value / t) * 100 },
                ]
            }
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <div className={classes.chipWithTextContainer}>
            <div
              className={classes.chip}
              style={{ backgroundColor: "#F6D35E" }}
            ></div>
            <h5 className={classes.title}>
              {e?.key[0].name === "Highly_edited_videos"
                ? "Highly Edited Videos"
                : e?.key[0].name === "Raw_cuts"
                  ? "Raw Cuts"
                  : e?.key[0].name}
            </h5>
          </div>

          <div className={classes.chipWithTextContainer}>
            <div
              className={classes.chip}
              style={{ backgroundColor: "#7FD7D7" }}
            ></div>
            <h5 className={classes.title}>
              {e?.key[1].name === "Highly_edited_videos"
                ? "Highly Edited Videos"
                : e?.key[1].name === "Raw_cuts"
                  ? "Raw Cuts"
                  : e?.key[1].name}
            </h5>
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          {
            e?.key?.length &&
            e.key.map((j, i) => {
              let value = 0;

              value = j.value;
             
              return (
                <p
                  key={i}
                  className={classes.subtitle}
                  style={{
                    color: value < 0 ? "red" : "green",
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
            })
          }
        </Grid>
      </Grid>
    </div>
  );
};
