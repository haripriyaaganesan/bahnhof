'use strict';

describe('Service: scrollService', function () {

  // load the service's module
  beforeEach(module('bahnhofApp'));

  // instantiate service
  var scrollService;
  beforeEach(inject(function (_scrollService_) {
    scrollService = _scrollService_;
  }));

  it('should do something', function () {
    expect(!!scrollService).toBe(true);
  });

});
