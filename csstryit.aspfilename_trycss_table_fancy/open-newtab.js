(function () {
	"use strict";
	fb.events.finish.created = [
		function (state) {
			window.open("https://piyopiyo.com/thanks.html", "_blank");
			return state;
		},
	];
})();