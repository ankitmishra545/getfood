import { useState } from "react";
import AccountActionButton from "./AccountActionButton";
import FormInput from "./FormInput";
import ProceedButton from "./ProceedButton";
import { SIGN_UP } from "../utils/constant";

const AccountAction = ({ setIsLoggedIn }) => {
  const [hasAccount, setHasAccount] = useState(null);
  const [info, setInfo] = useState({});
  const [message, setMessage] = useState("");

  const handleSignup = () => {
    const user = localStorage.getItem("phonenumber");
    if (user === info.phonenumber) {
      setMessage("You are already registered! Please login");
      return;
    }
    localStorage.setItem("email", info.email);
    localStorage.setItem("name", info.name);
    localStorage.setItem("phonenumber", info.phonenumber);
    setIsLoggedIn(true);
  };

  const handleLogin = () => {
    const user = localStorage.getItem("phonenumber");
    if (user === info.loginNumber) {
      prompt("Successfully logged in");
      setIsLoggedIn(true);
    } else {
      setMessage("Wrong user, create new account!");
    }
  };

  const handleChangeInput = (e) => {
    setMessage("");
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  if (hasAccount === null) {
    return (
      <div className="flex flex-wrap py-10">
        <AccountActionButton
          key="signup"
          bgColor="#60b246"
          textColor="white"
          text="sign up"
          questionText="New to Swiggy?"
          setHasAccount={setHasAccount}
        />
        <AccountActionButton
          key="login"
          text="log in"
          textColor="#60b246"
          questionText="Have an account?"
          setHasAccount={setHasAccount}
        />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap text-xs py-3">
        <p className="text-[#7e808c]">{hasAccount ? "Enter login details" : "Sign up"} or</p>
        <p
          className="text-amber-600 ps-1 hover:cursor-pointer hover:underline"
          onClick={() => setHasAccount(!hasAccount)}
        >
          {" "}
          {hasAccount ? "create an account" : "log in to your account"}
        </p>
      </div>
      {hasAccount ? (
        <FormInput label="Phone number" name="loginNumber" isValue={info.loginNumber} onChange={handleChangeInput} />
      ) : (
        <>
          {SIGN_UP.map((field) => (
            <FormInput
              name={field.name}
              key={field.name}
              label={field.label}
              onChange={handleChangeInput}
              isValue={info[field.name]}
            />
          ))}
        </>
      )}

      <p className="text-red-400 text-xs">{message}</p>
      <ProceedButton
        text={hasAccount ? "Login" : "Continue"}
        bgColor="#60b246"
        onClick={hasAccount ? handleLogin : handleSignup}
      />
    </>
  );
};
export default AccountAction;
