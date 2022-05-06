(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EVC"] = factory();
	else
		root["EVC"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CalendarEvent": () => (/* reexport */ CalendarEvent),
  "EventCalendar": () => (/* reexport */ EventCalendar)
});

;// CONCATENATED MODULE: ./src/CalendarEvent.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CalendarEvent = /*#__PURE__*/function () {
  function CalendarEvent(_ref) {
    var title = _ref.title,
        start = _ref.start,
        _ref$end = _ref.end,
        end = _ref$end === void 0 ? null : _ref$end,
        _ref$themeColor = _ref.themeColor,
        themeColor = _ref$themeColor === void 0 ? "#03a9f4" : _ref$themeColor;

    _classCallCheck(this, CalendarEvent);

    this.title = title; // if end day of weekly event is given but no start is given

    if (end && end.weekDay !== undefined && Number.isInteger(end.weekDay) && (start.weekDay === undefined || !Number.isInteger(start.weekDay))) {
      throw "End day of weekly event is given but no start day is given";
    }

    this.start = start;
    this.end = end !== null && end !== void 0 ? end : {};
    Object.assign(this.end, end !== null && end !== void 0 ? end : this.start);

    if (this.validateHexColor(themeColor)) {
      this.themeColor = themeColor;
    }
  }

  _createClass(CalendarEvent, [{
    key: "validateHexColor",
    value: function validateHexColor(color) {
      if (color.match(/^#([0-9a-f]{3}){1,2}$/i) !== null) {
        return true;
      } else {
        throw "Invalid hex color " + color;
      }
    }
  }]);

  return CalendarEvent;
}();


;// CONCATENATED MODULE: ./src/EventCalendar.js
function EventCalendar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EventCalendar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EventCalendar_createClass(Constructor, protoProps, staticProps) { if (protoProps) EventCalendar_defineProperties(Constructor.prototype, protoProps); if (staticProps) EventCalendar_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _today = /*#__PURE__*/new WeakMap();

var _days = /*#__PURE__*/new WeakMap();

var _month = /*#__PURE__*/new WeakMap();

var _year = /*#__PURE__*/new WeakMap();

var _events = /*#__PURE__*/new WeakMap();

var _defaultEvents = /*#__PURE__*/new WeakMap();

var _selectedDay = /*#__PURE__*/new WeakMap();

var _customEventStore = /*#__PURE__*/new WeakMap();

var _queuedCustomEvents = /*#__PURE__*/new WeakMap();

var EventCalendar = /*#__PURE__*/function () {
  function EventCalendar() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$events = _ref.events,
        events = _ref$events === void 0 ? [] : _ref$events;

    EventCalendar_classCallCheck(this, EventCalendar);

    _classPrivateFieldInitSpec(this, _today, {
      writable: true,
      value: new Date()
    });

    _classPrivateFieldInitSpec(this, _days, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _month, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _year, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _events, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _defaultEvents, {
      writable: true,
      value: [new CalendarEvent({
        title: "Today",
        start: {
          day: _classPrivateFieldGet(this, _today).getDate(),
          month: _classPrivateFieldGet(this, _today).getMonth() + 1,
          year: _classPrivateFieldGet(this, _today).getFullYear()
        },
        themeColor: "#8a4af3"
      })]
    });

    _classPrivateFieldInitSpec(this, _selectedDay, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _customEventStore, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _queuedCustomEvents, {
      writable: true,
      value: []
    });

    // this.htmlElement = targetElement;
    if (this.validateNoDuplicateEvents(events)) {
      this.events = events;
    } else {
      throw "Duplicate Events Not Allowed";
    }

    this.setup();
  }

  EventCalendar_createClass(EventCalendar, [{
    key: "month",
    get: function get() {
      return _classPrivateFieldGet(this, _month);
    },
    set: function set(month) {
      _classPrivateFieldSet(this, _month, month);

      if (this.month > 11) {
        _classPrivateFieldSet(this, _month, 0);

        this.year++;
      } else if (this.month < 0) {
        _classPrivateFieldSet(this, _month, 11);

        this.year--;
      } //dispatch event


      this.dispatchCustomEvent("monthChanged", this.month); // update days

      this.updateDays();
    }
  }, {
    key: "year",
    get: function get() {
      return _classPrivateFieldGet(this, _year);
    },
    set: function set(year) {
      _classPrivateFieldSet(this, _year, year);

      this.dispatchCustomEvent("yearChanged", this.year); // update days

      this.updateDays();
    }
  }, {
    key: "events",
    get: function get() {
      return _classPrivateFieldGet(this, _events);
    },
    set: function set(events) {
      events.map(function (ev) {
        return new CalendarEvent(ev);
      }); // convert to calendar event if its not already

      _classPrivateFieldSet(this, _events, events.map(function (ev) {
        return ev instanceof CalendarEvent ? ev : new CalendarEvent(ev);
      }));

      this.updateDays();
      this.dispatchCustomEvent("eventsChanged", this.events);
    }
  }, {
    key: "selectedDay",
    get: function get() {
      return _classPrivateFieldGet(this, _selectedDay);
    },
    set: function set(day) {
      _classPrivateFieldSet(this, _selectedDay, day);

      this.dispatchCustomEvent("selectedDayChanged", {
        day: this.selectedDay,
        events: this.getEventsForDay(day)
      });
      this.updateDays();
    }
  }, {
    key: "days",
    get: function get() {
      var _this = this;

      var x = _classPrivateFieldGet(this, _days).map(function (day) {
        return {
          day: day,
          events: _this.getEventsForDay(day)
        };
      });

      return x;
    },
    set: function set(days) {
      _classPrivateFieldSet(this, _days, days);

      this.dispatchCustomEvent("daysChanged", this.days);
    }
  }, {
    key: "customEventStore",
    get: function get() {
      return _classPrivateFieldGet(this, _customEventStore);
    },
    set: function set(customEvents) {
      _classPrivateFieldSet(this, _customEventStore, []);
    }
  }, {
    key: "setup",
    value: function setup() {
      this.events = this.events.concat(_classPrivateFieldGet(this, _defaultEvents));
      this.month = _classPrivateFieldGet(this, _today).getMonth();
      this.year = _classPrivateFieldGet(this, _today).getFullYear();
      this.days = this.getDaysInMonth(this.month, this.year);
    }
  }, {
    key: "on",
    value: function on(customEvent, callback) {
      var _this2 = this;

      _classPrivateFieldGet(this, _customEventStore).push({
        customEventName: customEvent,
        callback: callback
      }); // check and even with this name is queued


      var queuedCallsForThisEvent = _classPrivateFieldGet(this, _queuedCustomEvents).filter(function (ev) {
        return ev.customEventName === customEvent;
      });

      if (queuedCallsForThisEvent.length > 0) {
        queuedCallsForThisEvent.forEach(function (ev) {
          _this2.dispatchCustomEvent(ev.customEventName, ev.data);
        }); // clear queued calls

        _classPrivateFieldSet(this, _queuedCustomEvents, _classPrivateFieldGet(this, _queuedCustomEvents).filter(function (ev) {
          return ev.customEventName !== customEvent;
        }));
      }

      return this;
    }
  }, {
    key: "updateDays",
    value: function updateDays() {
      if (this.month !== undefined && Number.isInteger(this.month) && this.year !== undefined && Number.isInteger(this.year)) {
        this.days = this.getDaysInMonth(this.month, this.year);
      }
    }
  }, {
    key: "addEvent",
    value: function addEvent(event) {
      // make sure event is an instance of CalendarEvent
      if (event instanceof CalendarEvent) {
        // make sure event is not already in events
        if (this.validateEventDoesntExistsAlready(event)) {
          this.events = this.events.concat(event);
        } else {
          throw "Duplicate Events Not Allowed";
        }
      } else {
        throw "Event must be an instance of CalendarEvent";
      }
    }
  }, {
    key: "dispatchCustomEvent",
    value: function dispatchCustomEvent(customEvent, data) {
      var _this3 = this;

      if (_classPrivateFieldGet(this, _customEventStore).length > 0) {
        _classPrivateFieldGet(this, _customEventStore).forEach(function (ev) {
          if (ev.customEventName === customEvent) {
            ev.callback(data, _this3);
          }
        });
      } else {
        _classPrivateFieldGet(this, _queuedCustomEvents).push({
          customEventName: customEvent,
          data: data
        });
      }
    }
  }, {
    key: "getEventsForDay",
    value: function getEventsForDay(day) {
      var _this4 = this;

      var eventsFound = [];
      this.events.forEach(function (event) {
        if (_this4.checkDayHasEvent(day, event)) {
          eventsFound.push(event);
        }
      });
      return eventsFound;
    }
  }, {
    key: "checkDayHasEvent",
    value: function checkDayHasEvent(day, event) {
      // check if all values is not undefined and is integer
      var validIntegers = function validIntegers() {
        for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
          value[_key] = arguments[_key];
        }

        return value.every(function (v) {
          return v !== undefined && Number.isInteger(v);
        });
      };

      var checkSameObj = function checkSameObj(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
      };

      var eventStartDay = validIntegers(event.start.day) === false ? 1 : event.start.day;
      var eventStartMonth = validIntegers(event.start.month) === false ? validIntegers(event.start.year) ? 1 : day.getMonth() + 1 : event.start.month;
      var eventStartYear = validIntegers(event.start.year) === false ? day.getFullYear() : event.start.year;
      var eventStartWeekDay = validIntegers(event.start.weekDay) === false ? null : event.start.weekDay;
      var eventEndDay = validIntegers(event.end.day) === false ? eventStartDay : event.end.day;
      var eventEndMonth = validIntegers(event.end.month) === false ? eventStartMonth : event.end.month;
      var eventEndYear = validIntegers(event.end.year) === false ? eventStartYear : event.end.year;
      var eventEndWeekDay = validIntegers(event.end.weekDay) === false ? eventStartWeekDay : event.end.weekDay;
      var eventStart = new Date(eventStartYear, eventStartMonth - 1, eventStartDay);
      var eventEnd = new Date(eventEndYear, eventEndMonth - 1, eventEndDay); //if its weekly event

      if (eventStartWeekDay !== null) {
        if (eventStartWeekDay !== null && day.getDay() === eventStartWeekDay && eventEndWeekDay === null) {
          return true;
        } else if (eventStartWeekDay !== null && eventEndWeekDay !== null && day.getDay() >= eventStartWeekDay && day.getDay() <= eventEndWeekDay) {
          return true;
        }
      } else {
        //for single day events
        if (this.matchSameDate(day, eventStart) && this.matchSameDate(day, eventEnd)) {
          return true;
        } //for multi day events
        else if (day.getTime() >= eventStart.getTime() && day.getTime() <= eventEnd.getTime()) {
          return true;
        } else {
          return false;
        }
      }
    } // makes sure event is not already in events

  }, {
    key: "validateEventDoesntExistsAlready",
    value: function validateEventDoesntExistsAlready(event) {
      var _this$events;

      var eventsAvailable = (_this$events = this.events) !== null && _this$events !== void 0 ? _this$events : [];
      return eventsAvailable.filter(function (ev) {
        return ev.title === event.title && ev.start.getTime() === event.start.getTime() && ev.end.getTime() === event.end.getTime();
      }).length === 0;
    } //make sure no duplicate events are

  }, {
    key: "validateNoDuplicateEvents",
    value: function validateNoDuplicateEvents(events) {
      var foundDuplicate = false;
      events.forEach(function (event) {
        if (foundDuplicate === true) {
          return;
        }

        if (events.filter(function (ev) {
          return JSON.stringify(ev) === JSON.stringify(event);
        }).length > 1) {
          foundDuplicate = true;
        }
      });
      return !foundDuplicate;
    }
  }, {
    key: "getDaysInMonth",
    value: function getDaysInMonth(month, year) {
      var date = new Date(year, month, 1);
      var days = [];

      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }

      return days;
    }
  }, {
    key: "matchSameDate",
    value: function matchSameDate(date1, date2) {
      return date1 && date2 && date1.getFullYear() === date2.getFullYear() && date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth();
    }
  }]);

  return EventCalendar;
}();


;// CONCATENATED MODULE: ./src/index.js



/******/ 	return __webpack_exports__;
/******/ })()
;
});