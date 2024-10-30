import { IoMdClose } from "react-icons/io";
import FormInput from "../FormInput";
import ProceedButton from "../ProceedButton.js";
import { useState } from "react";
import { SIGN_UP, IMAGE_LOGIN } from "../../utils/constant";

const AccountModel = ({ onClose }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const [isReferred, setIsReferred] = useState(false);
  return (
    <div className="">
      <div className="pb-5 cursor-pointer" onClick={() => onClose(false)}>
        <IoMdClose size="30px" />
      </div>
      <div className="flex items-center justify-between pb-3">
        <div>
          <h4 className="font-bold text-2xl">{hasAccount ? "Login" : "Sign Up"}</h4>
          <div className="flex flex-wrap text-xs py-3">
            <p className="text-[#7e808c]">or</p>
            <p
              className="text-amber-600 ps-1 hover:cursor-pointer hover:underline cursor-pointer"
              onClick={() => {
                setHasAccount(!hasAccount);
                setIsReferred(false);
              }}
            >
              {hasAccount ? "create an account" : "login to your account"}
            </p>
          </div>
        </div>
        <img src={IMAGE_LOGIN} alt="login-image" className="w-24" />
      </div>
      {hasAccount ? (
        <FormInput label="Phone number" name="loginNumber" isValue="" onChange={() => {}} />
      ) : (
        SIGN_UP.map((field) => (
          <FormInput
            name={field.name}
            key={field.name}
            label={field.label}
            // onChange={handleChangeInput}
            // isValue={info[field.name]}
          />
        ))
      )}
      {isReferred && <FormInput name="referralCode" label="Referral code" />}
      {!hasAccount && !isReferred && (
        <p className="text-[#5d9ce1] font-bold pt-3 cursor-pointer" onClick={() => setIsReferred(true)}>
          Have a referral code?
        </p>
      )}
      <ProceedButton text={hasAccount ? "Login" : "continue"} bgColor="#f5721b" />
      <p className="text-xs">
        By {hasAccount ? "clicking on Login" : "creating an account"}, I accept the Terms & Conditions & Privacy Policy
      </p>
    </div>
  );
};

export default AccountModel;
