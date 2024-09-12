import { useState } from "react";
import AccountActionButton from "./AccountActionButton";
import FormInput from "./FormInput";
import ProceedButton from "./ProceedButton";

const AccountAction = () => {
  const [hasAccount, setHasAccount] = useState(null);
  return (
    <div>
      {hasAccount === null && (
        <div className="flex flex-wrap">
          <AccountActionButton
            key="signup"
            bgColor="green"
            textColor="white"
            text="sign up"
            questionText="New to Swiggy?"
            setHasAccount={setHasAccount}
          />
          <AccountActionButton
            key="login"
            text="log in"
            questionText="Have an account?"
            setHasAccount={setHasAccount}
          />
        </div>
      )}
      {hasAccount && (
        <div>
          <div className="flex flex-wrap text-xs py-3">
            <p className="text-[#7e808c]">Enter login details or</p>
            <p
              className="text-amber-600 ps-1 hover:cursor-pointer hover:underline"
              onClick={() => setHasAccount(false)}
            >
              {" "}
              create an account
            </p>
          </div>
          <FormInput label="Phone number" />
          <ProceedButton text="Login" bgColor="#60b246" />
        </div>
      )}
      {hasAccount === false && (
        <div>
          <div className=" flex flex-wrap text-xs py-3">
            <p className="text-[#7e808c]">Sign up or</p>
            <p className="text-amber-600 ps-1 hover:cursor-pointer hover:underline" onClick={() => setHasAccount(true)}>
              log in to your account
            </p>
          </div>
          <FormInput key="phonenumber" label="Phone number" />
          <FormInput key="name" label="Name" />
          <FormInput key="email" label="Email" />
          <ProceedButton bgColor="#60b246" text="Continue" />
        </div>
      )}
    </div>
  );
};

export default AccountAction;
