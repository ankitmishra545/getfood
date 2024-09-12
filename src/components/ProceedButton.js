const ProceedButton = ({ text, bgColor = "#f5721b" }) => {
  return (
    <div
      className={`uppercase my-5 flex items-center justify-center h-14 rounded-lg text-white font-semibold text-lg`}
      style={{ background: `${bgColor}` }}
    >
      {text}
    </div>
  );
};

export default ProceedButton;
