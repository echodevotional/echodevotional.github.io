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
			bibleDay: 0
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
			console.log(`devotions initialized.scripture: Month = ${this.bibleMonth}  Day = ${this.bibleDay}`);
		}
	});


	return {
		vm: vm
	};
})();

