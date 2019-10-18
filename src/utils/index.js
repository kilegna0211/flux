const devENVGetCoupons = () => {
		// return {
		// 	"id": "34",
		// 	"type": "COUPON",
		// 	"code": "fullSITE",
		// 	"clubMember": "SUBSCRIBED",
		// 	"amount": 25,
		// 	"minPurchase": 50,
		// 	"scope": "global",
		// 	"programmation": [
		// 		{
		// 		"start": [
		// 			"2019-10-03",
		// 			"00:00"
		// 		],
		// 		"end": [
		// 			"2019-10-31",
		// 			"23:59"
		// 		]
		// 		}
		// 	]
		// 	}
		return undefined
}

const getFraction = (number) => {
	var s = number.toFixed(2);
	s = String(s);
	return s.slice(s.indexOf('.')).replace('.',',');
}

const formatedPrice = (price) => {
	if (price === parseInt(price, 10)) {
	  return price;
	} 
	return price.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const discountOriginalPrice = (price, originalPrice) => {
	if ( originalPrice > price ) {
      let discountPrice = Math.round((originalPrice-price)*100/originalPrice);
      return discountPrice;
    }
};

export { devENVGetCoupons, getFraction, formatedPrice, discountOriginalPrice }

