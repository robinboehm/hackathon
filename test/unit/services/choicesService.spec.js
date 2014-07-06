'use strict';

describe('A choicesService', function () {


  var choicesService,
    $httpBackend;
  // setup
  beforeEach(module('trivagoApp'));
  beforeEach(inject(function (_$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET('data/places.json')
      .respond(mockData);
  }));
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

  describe('Initialization', function(){
    it('should initialize the choices array with first element', function(){
      expect(choicesService.choices).toEqual([]);
      $httpBackend.flush();
      expect(choicesService.choices.length).toBe(1);
    });

    it('should initialize with a $http request', function(){
      expect(choicesService.choices).toEqual([]);
      $httpBackend.expectGET('data/places.json');
      $httpBackend.flush();
    });
  });


  describe('Transitions', function () {
    beforeEach(function(){
      $httpBackend.flush();
    });

    describe('forward', function () {
      it('should insert a new choice row', function(){
        expect(choicesService.choices.length).toBe(1)

        choicesService.choose(undefined,1);

        expect(choicesService.choices.length).toBe(2)

      });
    });

    describe('backward', function () {
      it('should allow to go one step backward', function(){
        expect(choicesService.choices.length).toBe(1)

        choicesService.choose(undefined,1);

        expect(choicesService.choices.length).toBe(2);

        choicesService.choose(undefined,2);

        expect(choicesService.choices.length).toBe(3);

        choicesService.choose(undefined,1);

        expect(choicesService.choices.length).toBe(2);

      });
    });

    it('should allow to change last choice', function(){
      expect(choicesService.choices.length).toBe(1)

      choicesService.choose(undefined,1);

      expect(choicesService.choices.length).toBe(2);

      choicesService.choose(undefined,2);

      expect(choicesService.choices.length).toBe(3);

      // value = 2, step = 2
      choicesService.choose(undefined,2);

      expect(choicesService.choices.length).toBe(3);

    });
  });



// TODO: May inject via fixtures file
  var mockData = [
    {
      "id": "c4bb1e365e3f6967baa77da966007ed2",
      "key": ["activity", "Culture", ["culture"]],
      "value": {
        "1878187174_2392222818_o.jpg": {
          "content_type": "image/jpeg",
          "revpos": 2,
          "digest": "md5-m89NN4opOLh2Jxm92xFI9w==",
          "length": 629059,
          "stub": true
        }
      }
    },
    {
      "id": "c4bb1e365e3f6967baa77da9660092a6",
      "key": ["activity", "Cycling", ["cycling"]],
      "value": {
        "556660691_ca9f4fe2d6_o.jpg": {
          "content_type": "image/jpeg",
          "revpos": 2,
          "digest": "md5-RhJZudOaYVo7pJwRVEGAfQ==",
          "length": 108163,
          "stub": true
        }
      }
    },
    {
      "id": "c4bb1e365e3f6967baa77da966007830",
      "key": ["activity", "Hiking", ["hiking"]],
      "value": { "3-hiking.jpg": {} }
    },
    {
      "id": "c4bb1e365e3f6967baa77da966008b0b",
      "key": ["activity", "Sightseeing", ["sightseeing"]],
      "value": {
        "8616248935_e3201f168b_h.jpg": {
          "content_type": "image/jpeg",
          "revpos": 3,
          "digest": "md5-7Dp7SN7ViKB9KatHpw9KOQ==",
          "length": 1196680,
          "stub": true
        }
      }
    },
    {
      "id": "c4bb1e365e3f6967baa77da96600a25c",
      "key": ["activity", "Wellness", ["wellness"]],
      "value": {
        "4729118618_5c119dafc5_o.jpg": {
          "content_type": "image/jpeg",
          "revpos": 2,
          "digest": "md5-Ik4rvfc9hAxYGpMvDZvERQ==",
          "length": 1261766,
          "stub": true
        }
      }
    },
    {
      "id": "c4bb1e365e3f6967baa77da9660056b8",
      "key": ["activityType", "Party", ["party"]],
      "value": {
        "2-party.jpg": {
          "content_type": "image/jpeg",
          "revpos": 3,
          "digest": "md5-CkcXzMuLp0Gsk5YMFDPfdA==",
          "length": 799291,
          "stub": true
        }
      }
    },
    {
      "id": "c4bb1e365e3f6967baa77da9660059d5",
      "key": ["activityType", "Silence", ["silence"]],
      "value": {
        "2-silence.jpg": {
          "content_type": "image/jpeg",
          "revpos": 2,
          "digest": "md5-0Uw+GyuDfcyBFAy4Gracog==",
          "length": 880362,
          "stub": true
        }
      }
    },
    {
      "id": "c4bb1e365e3f6967baa77da9660068e1",
      "key": ["activityType", "Sport", ["sport"]],
      "value": {
        "2-sport.jpg": {
          "content_type": "image/jpeg",
          "revpos": 3,
          "digest": "md5-i+Y7nVipC9/bQJOUqCCQiQ==",
          "length": 147463,
          "stub": true
        }
      }
    },
    {
      "id": "c4bb1e365e3f6967baa77da96600aa25",
      "key": ["climate", "Cold", ["cold"]],
      "value": { "4-ice-weather.jpg": {} }
    },
    {
      "id": "c4bb1e365e3f6967baa77da96600aafe",
      "key": ["climate", "Moderate", ["moderate"]],
      "value": { "4-moderate-weather.jpg": {} }
    },
    {
      "id": "c4bb1e365e3f6967baa77da96600b912",
      "key": ["climate", "Hot", ["hot"]],
      "value": { "4-sunny-weather.jpg": {} }
    },
    {
      "id": "c4bb1e365e3f6967baa77da96600076d",
      "key": ["general", "Beach", ["beach"]],
      "value": {
        "1-beach.jpg": {
          "content_type": "image/jpeg",
          "revpos": 3,
          "digest": "md5-lkT1jm1psDX4uetWyJjlnQ==",
          "length": 144892,
          "stub": true
        }
      }
    },
    {
      "id": "3e16be51e9a63a927168180813000ef0",
      "key": ["general", "City", ["city"]],
      "value": {
        "1-city.jpg": {
          "content_type": "image/jpeg",
          "revpos": 2,
          "digest": "md5-hk49zV4WSXEg7FLxjGoeRQ==",
          "length": 49032,
          "stub": true
        }
      }
    },
    {
      "id": "c4bb1e365e3f6967baa77da9660011b6",
      "key": ["general", "Mountain", ["mountain"]],
      "value": {
        "1-mountains.jpg": {
          "content_type": "image/jpeg",
          "revpos": 2,
          "digest": "md5-s9NvTBR9QY3WeKD6jXEK0Q==",
          "length": 156323,
          "stub": true
        }
      }
    },
    {
      "id": "c4bb1e365e3f6967baa77da966002902",
      "key": ["price", "€", ["cheap"]],
      "value": null
    },
    {
      "id": "c4bb1e365e3f6967baa77da9660032e7",
      "key": ["price", "€€", ["middle"]],
      "value": null
    },
    {
      "id": "c4bb1e365e3f6967baa77da966004864",
      "key": ["price", "€€€", ["expensive"]],
      "value": null
    }
  ];

});