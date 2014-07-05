'use strict';

describe('A choicesService', function () {



  var choicesService;
  // setup
  beforeEach(module('trivagoApp'));

  beforeEach(inject(function (_choicesService_) {
    choicesService = _choicesService_;
  }));

  describe('Public API', function () {

    it('should provide a choices array', function () {
      expect(choicesService.choices).toBeDefined();
      expect(choicesService.choices instanceof Array).toBe(true);
    });

    it('should provide a choose function', function () {
      expect(choicesService.choose).toBeDefined();
      expect(typeof choicesService.choose).toEqual('function');
    });

  });



});