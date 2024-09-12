import ProceedButton from "./ProceedButton";

const ADDRESS_FIELD = ["address", "house/flat no", " landmark", "tag as"];

const Address = () => {
  return (
    <div className="bg-white p-8">
      <h2>Save delvery location</h2>
      {ADDRESS_FIELD.map((field) => (
        <div key={field} className="flex flex-col">
          <label className="uppercase">{field}</label>
          <input type="text" className="border-b-2 p-2 focus:outline-none " />
        </div>
      ))}
      <ProceedButton text="save and proceed" />
    </div>
  );
};

export default Address;
