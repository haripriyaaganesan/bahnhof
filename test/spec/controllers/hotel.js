'use strict';

describe('Controller: HotelCtrl', function () {

  // load the controller's module
  beforeEach(module('bahnhofApp'));

  var HotelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HotelCtrl = $controller('HotelCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
