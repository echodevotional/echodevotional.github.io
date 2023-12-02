"use strict";

(function ()
{
	let vm = new Vue(
	{
		el: "#pageView",

		data:
		{
			bibleGatewayUrl: 'http://mobile.biblegateway.com/passage/?search=',
			bibleGatewayUrlSufx: '&version=51',
			currentDateFormatted: '',
			bibleMonth: 0,
			bibleDay: 0,
			currentYear: 0,
			copyright: ''
		},

		methods:
		{
			getCompactDailyScripture: function (month, day)
			{
				let scripture = edShared.Static.GetCompactScripture(month, day);
				return `${this.bibleGatewayUrl}${scripture}${this.bibleGatewayUrlSufx}`;
			},

			getCompleteDailyScripture: function (month, day)
			{
				let scripture = edShared.Static.GetCompleteScripture(month, day);
				return `${this.bibleGatewayUrl}${scripture}${this.bibleGatewayUrlSufx}`;
			},

		},

		created: function ()
		{
			let dt = luxon.DateTime.local();
			this.currentDateFormatted = dt.toFormat('DDD');
			this.bibleMonth = dt.month;
			this.bibleDay = dt.day;
			this.currentYear = dt.year;
			this.copyright = `&copy; 2017-${this.currentYear} Hope for the Heart. All Rights Reserved. v2023.12.02.`
			console.log(`initialized: Month = ${this.bibleMonth}  Day = ${this.bibleDay}  Year = ${this.currentYear}`);
		}
	});


	return {
		vm: vm
	};
})();

