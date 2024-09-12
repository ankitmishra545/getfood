const AccountActionButton = ({ bgColor = "white", textColor = "green", questionText, text, setHasAccount }) => {
  const backgroundColor = bgColor === "white" ? `bg-${bgColor}` : `bg-${bgColor}-600`;
  const color = textColor === "white" ? `text-${textColor}` : `text-${textColor}-600`;

  return (
    <>
      <div
        className={`${color} ${backgroundColor} p-2 text-center w-full border-green-500 border-2 mt-3 hover:cursor-pointer`}
        onClick={() => setHasAccount(text === "log in")}
      >
        <p className="text-xs">{questionText}</p>
        <p className="text-lg font-bold uppercase">{text}</p>
      </div>
    </>
  );
};

export default AccountActionButton;
