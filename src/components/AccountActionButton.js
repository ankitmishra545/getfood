const AccountActionButton = ({ bgColor = "white", textColor = "#60b246", questionText, text, setHasAccount }) => {
  return (
    <div
      className={`p-1 text-center w-52 me-3 border-green-500 border-2 hover:cursor-pointer`}
      onClick={() => setHasAccount(text === "log in")}
      style={{ color: textColor, background: bgColor }}
    >
      <p className="text-xs">{questionText}</p>
      <p className="text-lg font-bold uppercase">{text}</p>
    </div>
  );
};

export default AccountActionButton;
