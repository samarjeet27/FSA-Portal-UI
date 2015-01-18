// main script

$(document).ready(function () {
	$(".responsive-calendar").responsiveCalendar({
	time: '2015-01',
	events: {
		"2015-01-30": {"number": 5, "url": "event no. 5"},
		"2015-01-26": {"number": 1, "url": "event no. 1"}, 
		"2015-01-03":{"number": 1}, 
		"2015-01-12": {}}
	});
});
