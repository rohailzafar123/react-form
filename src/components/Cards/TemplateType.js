import React from "react";
import { makeStyles, createStyles, IconButton } from "@material-ui/core";

import Tiktok from "../../asstes/Images/tiktokLogo.svg";
import facebook from "../../asstes/Images/facebookLogo.svg";
import twitter from "../../asstes/Images/twitterLogo.svg";
import google from "../../asstes/Images/googleLogo.svg";
import insta from "../../asstes/Images/instagramLogo.svg";
import linkedin from "../../asstes/Images/linkedinLogo.svg";
import pinterest from "../../asstes/Images/PinterestLogo.svg";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      marginRight: "20px",
    },
    border: {
      borderColor: "#d0d0d0",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: "6px",
      padding: "3px",
    },
  })
);

export default function TemplateType({ changeTempType, tempType }) {
  const classes = useStyles();

  // const total = datapoints.key[11].value / e.value;
  // const result = Math.round(total * pr);
  // let value = 100 - result;
  return (
    <div className={classes.card}>
      <p style={{ fontSize: "12px" }}>Choose Ad Types</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton>
          <img
            style={{
              cursor: "pointer",
            }}
            src={Tiktok}
            alt="Tiktok"
            width="30px"
            className={tempType === "tiktok" && classes.border}
            onClick={() => changeTempType("tiktok")}
          />
        </IconButton>
        <IconButton>
          <img
            style={{
              cursor: "pointer",
            }}
            src={facebook}
            alt="Facebook"
            width="30px"
            className={tempType === "fb" && classes.border}
            onClick={() => changeTempType("fb")}
          />
        </IconButton>
        <IconButton>
          <img
            style={{
              cursor: "pointer",
            }}
            src={twitter}
            alt="twitter"
            width="30px"
            className={tempType === "twitter" && classes.border}
            onClick={() => changeTempType("twitter")}
          />
        </IconButton>
        <IconButton>
          <img
            style={{
              cursor: "pointer",
            }}
            src={google}
            alt="google"
            width="30px"
            className={tempType === "template/google" && classes.border}
            onClick={() => changeTempType("template/google")}
          />
        </IconButton>
        <IconButton>
          <img
            style={{
              cursor: "pointer",
            }}
            src={insta}
            alt="insta"
            width="30px"
            className={tempType === "insta" && classes.border}
            onClick={() => changeTempType("insta")}
          />
        </IconButton>
        <IconButton>
          <img
            style={{
              cursor: "pointer",
            }}
            src={linkedin}
            alt="linkedin"
            width="30px"
            className={tempType === "linkedin" && classes.border}
            onClick={() => changeTempType("linkedin")}
          />
        </IconButton>
        <IconButton>
          <img
            style={{
              cursor: "pointer",
            }}
            src={pinterest}
            alt="pinterest"
            width="25px"
            className={tempType === "pinterest" && classes.border}
            onClick={() => changeTempType("pinterest")}
          />
        </IconButton>
      </div>
    </div>
  );
}
