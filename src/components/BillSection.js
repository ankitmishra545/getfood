const BillSection = ({ billName, billValue = 0, textColor = "black", discount = 0 }) => {
  const isItemBillName = billName === "Item Total";
  return (
    <div className="flex justify-between">
      <p>{billName}</p>
      <div>
        {isItemBillName && discount !== 0 && <del>{billValue}</del>}
        <p style={{ color: textColor }} className="text-end">
          {discount === 0 ? billValue : billValue - discount}
        </p>
      </div>
    </div>
  );
};

export default BillSection;
