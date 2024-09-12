import { useState } from "react";

const FormInput = ({ label = "" }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="border-[1px] border-gray-300 h-[65px] flex flex-col justify-center">
      {isFocus && <p className="text-[#7e808c] text-sm px-2">{label}</p>}
      <input
        type="text"
        className="py-1 px-3 focus:outline-none placeholder-[#7e808c] placeholder:font-semibold"
        placeholder={!isFocus ? label : ""}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  );
};

export default FormInput;
