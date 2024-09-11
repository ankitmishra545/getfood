const BillSection = ({ billName, billValue = 0, textColor = "black", discount = 0 }) => {
  const isItemBillName = billName === "Item Total";
  return (
    <div className="flex justify-between my-1">
      <p>{billName}</p>
      <div className="flex">
        {isItemBillName && discount !== 0 && <del className="opacity-60 pr-3">{billValue}</del>}
        <p style={{ color: textColor }} className="text-end">
          {discount === 0 ? billValue : billValue - discount}
        </p>
      </div>
    </div>
  );
};

export default BillSection;
