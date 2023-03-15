// ==UserScript==
// @name        Last.fm: Use System Font
// @namespace   https://github.com/matthewmcvickar/userscripts
// @match       https://www.last.fm/*
// @grant       none
// @version     1.0
// @author      -
// @description 3/5/2023, 6:23:21 PM
// ==/UserScript==

(function() {
	'use strict';

	document.body.style.fontFamily = 'system, -apple-system';
	document.body.style.fontStretch = 'semi-condensed';
})();
