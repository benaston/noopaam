;(function(root) {

	'use strict';

	var namespace = {};

	@@noopaam

	if ((typeof exports === 'object') && module) {
		module.exports = namespace.noopaam; // CommonJS
	} else if ((typeof define === 'function') && define.amd) {
		define(function() {
			return namespace.noopaam;
		}); // AMD
	} else {
		root.noopaam = namespace.noopaam; // Browser
	}

}(this));