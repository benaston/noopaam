'use strict';

var noop = self.noopaam;

describe('noopaam', function() {

	describe('noop', function() {

		it('should return undefined', function() {
			// arrange & act & assert
			expect(noop()).toBe(undefined);
		});

	});

	describe('noop.truthy', function() {

		it('should return true', function() {
			// arrange & act & assert
			expect(noop.truthy()).toBe(true);
		});

	});

	describe('noop.falsy', function() {

		it('should return false', function() {
			// arrange & act & assert
			expect(noop.falsy()).toBe(false);
		});

	});

	describe('noop.exception', function() {

		it('should throw an exception with the supplied message', function() {
			// arrange
			var exceptionMessage, result;

			exceptionMessage = 'foo';

			try {

				// act
				noop.exception(exceptionMessage);

			} catch (e) {

				// assert
				result = e;

			}

			expect(result).toBe(exceptionMessage);
		});

	});

});