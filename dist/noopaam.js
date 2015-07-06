;(function(root) {

	'use strict';

	var namespace = {};

	;(function(namespace) {

	'use strict';

	function noop() {}

	noop.truthy = function() {
		return true;
	};

	noop.falsy = function() {
		return false;
	};

	noop.exception = function(str) {
		throw str;
	};

	namespace.noopaam = noop;

}(namespace));

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