import React from "react";
import { SimpleTopbar } from "../../components";
import { makeStyles, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
// import backIcon from "../../asstes/Images/back.svg";
import { Btn, InputField } from "../../components";
import { useState } from "react";
import usePasswordValidator from "react-use-password-validator";
// import { useDispatch } from "react-redux";
// import { authActions, modalAction } from "../../store/actions";
// import PasswordStrengthBar from "react-password-strength-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px 0px",
    height: "auto",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: "23px",
    boxShadow: "0px 4px 78px #0000000D",
    height: "auto",
    padding: "30px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  classOne: {
    textTransform: "lowercase",
    "& > :first-letter": {
      textTransform: "capitalize",
    },
  },
  title: {
    color: "#3D3D3D",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "0px",
    fontSize: "30px",
    paddingBottom: "0px",
    marginBottom: "0PX",
  },
}));

export const Signup = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenum, setphonenum] = useState();
  const [load, setLoad] = useState(false);
  const [score, setScore] = useState(false);
  const [removeArray, setRemoveArray] = useState(false);
  const [validate, setValidate] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    phoneNumError: "",
  });
  // booleans for password validations
  const [containsUL, setContainsUL] = useState(false); // uppercase letter
  const [containsLL, setContainsLL] = useState(false); // lowercase letter
  const [containsN, setContainsN] = useState(false); // number
  const [containsSC, setContainsSC] = useState(false); // special character
  const [contains8C, setContains8C] = useState(false); // min 8 characters
  const [passwordMatch, setPasswordMatch] = useState(false); // passwords match
  const [isValid, setIsValid] = usePasswordValidator({
    digits: 1,
    min: 8,
    lowercase: true,
    uppercase: 1,
    spaces: false,
  });
  const [errorArray, setErrorArray] = useState([]); // passwords match
  // checks all validations are true

  // labels and state boolean corresponding to each validation
  const mustContainData0 = [
    ["an uppercase letter (a-z)", containsUL],
    ["a lowercase letter (A-Z)", containsLL],
    ["a number (0-9)", containsN],
    ["a special character (!@#$)", containsSC],
    ["at least 8 characters", contains8C],
    ["Passwords match", passwordMatch],
  ];

  const mustContainData = [
    ["an lowercase letter (a-z)"],
    ["a uppercase letter (A-Z)"],
    ["a number (0-9)"],
    ["a special character (!@#$)"],
    ["at least 8 characters"],
    ["Passwords match"],
  ];

  const history = useHistory();

  function validateEmail(email) {
    const specialChracter =
      /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return specialChracter.test(email);
  }

  const ontypePassword = (e) => {
    setPassword(e.target.value);
    setIsValid(e.target.value);
    // validatePassword();
  };

  const handleSignUp = (e) => {
    // validatePassword();
    if (removeArray === true) {
      setRemoveArray(false);
      console.log("Remove karo");
      setErrorArray([]);
    }
    e.preventDefault();
    if (!firstName) {
      setValidate((oldState) => ({
        ...oldState,
        firstNameError: "Incorrect First Name",
      }));
      return;
    } else {
      setValidate((oldState) => ({
        ...oldState,
        firstNameError: "",
      }));
    }
    if (!lastName) {
      setValidate((oldState) => ({
        ...oldState,
        lastNameError: "Incorrect Last Name",
      }));
      return;
    } else {
      setValidate((oldState) => ({
        ...oldState,
        lastNameError: "",
      }));
    }
    if (!validateEmail(email)) {
      e.preventDefault();
      setValidate((oldState) => ({
        ...oldState,
        emailError: "Invalid Email",
      }));
      return;
    } else {
      setValidate((oldState) => ({
        ...oldState,
        emailError: "",
      }));
    }
    if (!phonenum) {
      e.preventDefault();
      setValidate((oldState) => ({
        ...oldState,
        phoneNumError: "Invalid phone number",
      }));
      return;
    } else {
      setValidate((oldState) => ({
        ...oldState,
        phoneNumError: "",
      }));
    }
    if (!isValid) {
      // validatePassword()
      if (removeArray === true) {
        setValidate((oldState) => ({
          ...oldState,
          passwordError: "Password must contain " + errorArray,
        }));
      }
      return;
    } else {
      console.log("password chala");
      validatePassword();
      setValidate((oldState) => ({
        ...oldState,
        passwordError: "",
      }));
      // setLoad(true);
    }
  };
  // console.log(phonenum,'phone num')

  const validatePassword = () => {
    setRemoveArray(true);
    console.log("errorArray", errorArray);
    let tempErrors = errorArray.slice();
    console.log("tempErrors", tempErrors);

    // has uppercase letter
    if (password.toLowerCase() !== password) {
      setContainsUL(true);
      // console.log('An uppercase letter (a-z)')
    } else {
      setContainsUL(false);
      tempErrors.push(mustContainData[1]);
      // setErrorArray(mustContainData[1]);
      // setErrorArray(tempErrors);
    }

    // has lowercase letter
    if (password.toUpperCase() !== password) {
      setContainsLL(true);
      // console.log('An lowerCase letter (A-Z)')
    } else {
      console.log("has lowercase letter");
      setContainsLL(false);
      tempErrors.push(mustContainData[0]);
      // setErrorArray(mustContainData[0]);
      // setErrorArray(tempErrors);
    }

    // has number
    if (/\d/.test(password)) setContainsN(true);
    else {
      console.log("has no number");
      setContainsN(false);
      tempErrors.push(mustContainData[2]);
      // setErrorArray(mustContainData[2]);
      // setErrorArray(tempErrors);
    }

    // has special character
    // if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password))
    //   setContainsSC(true);
    // else {
    //   console.log("has no special number");
    //   setContainsSC(false);
    //   setPassError("use symbols");
    //   tempErrors.push(mustContainData[3]);
    //   // setErrorArray(mustContainData[3]);
    // }

    // has 8 characters
    if (password.length >= 8) setContains8C(true);
    else {
      console.log("has no 8 characters");
      setContains8C(false);
      tempErrors.push(mustContainData[4]);
      // setErrorArray(mustContainData[4]);
      // setErrorArray(tempErrors);
    }

    // passwords match
    // if (password !== "" && passwordOne === passwordTwo) setPasswordMatch(true)
    // else setPasswordMatch(false)

    // all validations passed
    console.log("Valid hogaya", containsLL, containsUL, containsN, contains8C);
    if (!isValid) {
      setErrorArray(tempErrors);
      // setAllValid(true);
    }
    // else {
    //   setErrorArray(tempErrors);
    //   setAllValid(false);
    // }
    // setTimeout(() => {
    //   setErrorArray([]);
    // }, 100);
  };
  return (
    <div>
      <div className={classes.root}>
        <Grid container className={classes.root}>
          <Grid item lg={8} md={8} sm={10} xs={10}>
            <br />
            <br />
            <div className={classes.card}>
              <h1 className={classes.title}></h1>
              <div>
                <Grid container spacing={4}>
                  <Grid item lg={6} sm={6} md={6} xs={12}>
                    <InputField
                      className={classes.classOne}
                      type="test"
                      // inputProps={{ textTransform: "uppercase" }}
                      error={validate.firstNameError ? true : false}
                      errorText={validate.firstNameError}
                      value={firstName}
                      onChange={(e) =>
                        setFirstName(
                          e.target.value
                            .toLowerCase()
                            .split(" ")
                            .map((word) => {
                              return (
                                word.charAt(0).toUpperCase() + word.slice(1)
                              );
                            })
                            .join(" ")
                        )
                      }
                      label="First Name"
                    />
                  </Grid>
                  <Grid item lg={6} sm={6} md={6} xs={12}>
                    <InputField
                      label="Last Name"
                      type="text"
                      error={validate.lastNameError ? true : false}
                      errorText={validate.lastNameError}
                      // placeholder="Last Name"
                      value={lastName}
                      onChange={(e) =>
                        setLastName(
                          e.target.value
                            .toLowerCase()
                            .split(" ")
                            .map((word) => {
                              return (
                                word.charAt(0).toUpperCase() + word.slice(1)
                              );
                            })
                            .join(" ")
                        )
                      }
                    />
                  </Grid>
                </Grid>
                <br />
                <Grid container>
                  <Grid item lg={12} sm={12} md={12} xs={12}>
                    <InputField
                      value={email}
                      error={validate.emailError ? true : false}
                      errorText={validate.emailError}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      label="Email Address"
                    />
                  </Grid>
                </Grid>
                <br />
                <Grid container spacing={4}>
                  <Grid item lg={6} sm={6} md={6} xs={12}>
                    <InputField
                      value={phonenum}
                      onChange={(e) => setphonenum(e)}
                      type="phone-num"
                      label="Phone Number"
                      defaultCountry={"us"}
                      name="phone"
                      error={validate.phoneNumError ? true : false}
                      errorText={validate.phoneNumError}
                    />
                  </Grid>
                  <Grid item lg={6} sm={6} md={6} xs={12}>
                    <InputField
                      error={validate.passwordError ? true : false}
                      errorText={validate.passwordError}
                      value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      onChange={(e) => ontypePassword(e)}
                      type="password"
                      label="Password"
                      // onKeyUp={validatePassword}
                      onBlur={validatePassword}
                      // onFocus={validatePassword}
                    />
                    {/* <div className="must-container cfb">
                      {mustContainData.map(data => <MustContainItem data={data} />)}
                    </div> */}
                  </Grid>
                </Grid>
                <Grid container className={classes.flex}>
                  <Grid item lg={12} sm={12} md={12} xs={12}></Grid>
                </Grid>
                <br />
                <br />
                <span onClick={handleSignUp}>
                  <Btn
                    load={load}
                    value="Next"
                    color="#ECECEC"
                    bgcolor="#00EFD4"
                  />
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
