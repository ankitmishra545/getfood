const calculateBillInfo = (discount, itemValue, travelDistance) => {
  let offerStartIndex;
  let offerEndIndex;
  let offer;
  let maxDiscountStartIndex;
  let maxDiscountEndIndex;
  let maxDiscount;
  let match;
  let calDiscount = 0;
  let platformFee = parseInt(travelDistance) > 2 ? 20 : parseInt(travelDistance) * 2;
  let couponInfo = [];

  discount.forEach((d) => {
    const str = d.meta;
    if (d.discountType === "Percentage") {
      offerStartIndex = 0;
      offerEndIndex = str.indexOf("%");
      maxDiscountStartIndex = str.indexOf("₹");

      match = str.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g);
      maxDiscountEndIndex = str.indexOf(" |");
      offer = +str.slice(offerStartIndex, offerEndIndex);
      maxDiscount = +str.slice(maxDiscountStartIndex + 1, maxDiscountEndIndex);
      let minOrderValueForDiscount = 199;
      if (itemValue > minOrderValueForDiscount) {
        calDiscount = +((itemValue * +offer) / 100).toFixed(2);
        calDiscount = calDiscount > maxDiscount ? maxDiscount : calDiscount;
      }

      let discountObject = {};
      discountObject.discountType = offer + "%";
      discountObject.code = match[0];
      discountObject.discount = calDiscount;
      discountObject.minOrderValue = minOrderValueForDiscount;
      couponInfo.push(discountObject);
    } else {
      offerStartIndex = str.indexOf("₹") + 1;
      offerEndIndex = str.indexOf(" off");
      offer = +str.slice(offerStartIndex, offerEndIndex);
      if (isNaN(offer)) {
        return;
      }
      let minOrderStartIndex = str.indexOf("₹", offerEndIndex);
      let minOrderEndIndex = str.indexOf(" |");
      let minOrderValueForDiscount = 299;
      if (minOrderStartIndex !== -1) {
        minOrderValueForDiscount = +str.slice(minOrderStartIndex + 1, minOrderEndIndex);
      }
      match = str.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g);
      if (itemValue > minOrderValueForDiscount) {
        calDiscount = offer;
      }
      let discountObject = {};
      discountObject.discountType = offer;
      discountObject.code = match[0];
      discountObject.discount = calDiscount;
      discountObject.minOrderValue = minOrderValueForDiscount;
      couponInfo.push(discountObject);
    }
  });

  let tax = +(((itemValue - calDiscount) * 5) / 100).toFixed(2);

  return { platformFee, calDiscount, tax, couponInfo };
};

export default calculateBillInfo;
