// ==UserScript==
// @name        Boomkat: Always Show All Tracks
// @match       https://boomkat.com/*
// @namespace   https://github.com/matthewmcvickar/userscripts
// @grant       none
// @version     1.0
// @author      -
// @description 3/14/2023, 7:00:28 PM
// ==/UserScript==

(function() {
	'use strict';

	document.querySelectorAll('.track-hidden').forEach(el => { el.style.display = 'table-row' });
})();
