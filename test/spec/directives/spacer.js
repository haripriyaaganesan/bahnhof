'use strict';

describe('Directive: spacer', function () {

  // load the directive's module
  beforeEach(module('bahnhofApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<spacer></spacer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the spacer directive');
  }));
});
