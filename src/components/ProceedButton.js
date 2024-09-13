const ProceedButton = ({ text, bgColor = "#f5721b", onClick }) => {
  return (
    <div
      className={`uppercase my-5 flex items-center justify-center h-14 rounded-lg text-white font-semibold text-lg cursor-pointer hover:opacity-80`}
      style={{ background: `${bgColor}` }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default ProceedButton;
