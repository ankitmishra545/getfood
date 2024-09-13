import ProceedButton from "./ProceedButton";
import { GrHomeRounded } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";

const ADDRESS_FIELD = ["address", "house/flat no", " landmark"];

const TAG_AS = [
  {
    name: "Home",
    icon: <GrHomeRounded />,
  },
  {
    name: "Work",
    icon: <MdWorkOutline />,
  },
  {
    name: "Other",
    icon: <IoLocationSharp />,
  },
];

const Address = () => {
  const [address, setAddress] = useState({});

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleClickAddTag = (e) => {
    setAddress({ ...address, tagName: e.target.name });
  };

  return (
    <div className="bg-white p-8">
      <h2 className="text-[#282c3f] font-bold text-lg pb-5">Save delivery location</h2>
      {ADDRESS_FIELD.map((field) => (
        <div key={field} className="flex flex-col py-2">
          <label className="uppercase text-[#7e808c] text-sm">{field}</label>
          <input
            name={field}
            type="text"
            className="border-b-2 px-2 pt-2 focus:outline-none "
            onChange={handleChange}
          />
        </div>
      ))}
      <div>
        <label className="uppercase text-[#7e808c] text-sm">TAG AS</label>
        <div className="flex justify-between pt-3">
          {TAG_AS.map((tag) => (
            <button
              key={tag.name}
              className="border-b-2 font-thin text-lg flex items-center hover:font-semibold"
              onClick={handleClickAddTag}
              style={{ borderBottomColor: address.tagName === tag.name ? "orange" : "" }}
              name={tag.name}
            >
              <span className="pe-1">{tag.icon}</span>
              {tag.name}
            </button>
          ))}
        </div>
      </div>
      <ProceedButton text="save and proceed" />
    </div>
  );
};

export default Address;
