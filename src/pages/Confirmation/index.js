import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    // padding: "20px 20px",
    height: "auto",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    marginTop: 30,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: "23px",
    boxShadow: "0px 4px 78px #0000000D",
    height: "auto",
    padding: "30px 30px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    position: "relative",
  },
  cardLoading: {
    backgroundColor: "#FFFFFF",
    borderRadius: "23px",
    boxShadow: "0px 4px 78px #0000000D",
    height: "450px",
    textAlign:'center'
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 8px",
  },
  popover: {
    fontSize: "12px",
    color: "#7D7D7D",
  },
  paper: {
    padding: theme.spacing(1),
    boxShadow: "0px 4px 78px #0000000D",
    backgroundColor: "#FFFFFF",
  },
}));
export const Confirmation = () => {
  const classes = useStyles();


  return (
    <div>
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center" className={classes.root} >
          <Grid item lg={8} md={10} sm={10} xs={10}>
            <Grid container className={classes.cardLoading} justify='center' alignItems="center" >
              <Grid item md={8} sm={10} xs={6} justify='center' alignItems="center"  >
                <MailOutlineIcon style={{fontSize:'40px',color:'#00EFD4'}} />
                <h2 style={{fontSize:'100%',fontFamily:"sans-serif"}}>
                  You will receive a confirmation link in your email. If you used any other email, you will need to wait for approval from the Gatekeeper.
                </h2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
