// ==UserScript==
// @name        Boomkat: Always Show All Tracks
// @description Always show the full tracklisting on Boomkat album pages.
// @namespace   https://github.com/matthewmcvickar/userscripts
// @match       https://boomkat.com/*
// @grant       none
// @version     1.0
// @author      -
// ==/UserScript==

(function() {
	'use strict';

	document.querySelectorAll('.track-hidden').forEach(el => { el.style.display = 'table-row' });
})();
