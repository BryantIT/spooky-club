import React, { Fragment, useState } from "react";
import Registration from "./Registration";
import ButtonSwitch from "./ButtonSwitch";
import Signin from "./Signin";

const AccessWrapper = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isInSelect, setIsInSelect] = useState(true);

  const setSwitch = (choice) => {
    if (choice === "signup") {
      setIsSignUp(!isSignUp);
      setIsInSelect(!isInSelect);
    }
    if (choice === "signin") {
      setIsSignIn(!isSignIn);
      setIsInSelect(!isInSelect);
    }
    if (choice === "back") {
      setIsSignIn(false);
      setIsSignUp(false);
      setIsInSelect(true);
    }
  };

  const Switch = () => {
    return isInSelect ? <ButtonSwitch handleSelection={setSwitch} /> : null;
  };

  const Reg = () => {
    return isSignUp ? <Registration handleBack={setSwitch} /> : null;
  };

  const Login = () => {
    return isSignIn ? <Signin handleBack={setSwitch} /> : null;
  };
  return (
    <Fragment>
      <Switch />
      <Reg />
      <Login />
    </Fragment>
  );
};

export default AccessWrapper;
