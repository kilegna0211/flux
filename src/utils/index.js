const devENVGetCoupons = () => {
		return {
			"id": "34",
			"type": "COUPON",
			"code": "TESTClub",
			"clubMember": "SUBSCRIBED",
			"amount": 25,
			"minPurchase": 100,
			"scope": "global",
			"programmation": [
				{
				"start": [
					"2019-10-03",
					"00:00"
				],
				"end": [
					"2019-10-31",
					"23:59"
				]
				}
			]
			}
}

const getFraction = (number) => {
	var s = number.toFixed(2);
	s = String(s);
	return s.slice(s.indexOf('.')).replace('.',',');
}

export { devENVGetCoupons, getFraction }