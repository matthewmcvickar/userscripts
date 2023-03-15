// ==UserScript==
// @name        Last.fm: Use System Font
// @description Use system font instead of Last.fm's font that is hard to read.
// @namespace   https://github.com/matthewmcvickar/userscripts
// @match       https://www.last.fm/*
// @author      matthewmcvickar
// @version     1.0
// @grant       none
// ==/UserScript==

(function() {
	'use strict';

	document.body.style.fontFamily = 'system, -apple-system';
	document.body.style.fontStretch = 'semi-condensed';
})();
