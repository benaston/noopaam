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