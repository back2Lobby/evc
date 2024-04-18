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
  CalendarEvent: () => (/* reexport */ CalendarEvent),
  EventCalendar: () => (/* reexport */ EventCalendar)
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const esm_browser_native = ({
  randomUUID
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = ((/* unused pure expression or super */ null && (stringify)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js




function v4(options, buf, offset) {
  if (esm_browser_native.randomUUID && !buf && !options) {
    return esm_browser_native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
;// CONCATENATED MODULE: ./src/CalendarEvent.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var CalendarEvent = /*#__PURE__*/function () {
  function CalendarEvent(_ref) {
    var _ref$id = _ref.id,
      id = _ref$id === void 0 ? null : _ref$id,
      title = _ref.title,
      start = _ref.start,
      _ref$end = _ref.end,
      end = _ref$end === void 0 ? null : _ref$end,
      _ref$themeColor = _ref.themeColor,
      themeColor = _ref$themeColor === void 0 ? "#03a9f4" : _ref$themeColor;
    _classCallCheck(this, CalendarEvent);
    this.id = id ? id : esm_browser_v4();
    this.title = title;

    // if end day of weekly event is given but no start is given
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
  return _createClass(CalendarEvent, [{
    key: "validateHexColor",
    value: function validateHexColor(color) {
      if (color.match(/^#([0-9a-f]{3}){1,2}$/i) !== null) {
        return true;
      } else {
        throw "Invalid hex color " + color;
      }
    }
  }]);
}();

;// CONCATENATED MODULE: ./src/EventCalendar.js
function EventCalendar_typeof(o) { "@babel/helpers - typeof"; return EventCalendar_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, EventCalendar_typeof(o); }
function EventCalendar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function EventCalendar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, EventCalendar_toPropertyKey(descriptor.key), descriptor); } }
function EventCalendar_createClass(Constructor, protoProps, staticProps) { if (protoProps) EventCalendar_defineProperties(Constructor.prototype, protoProps); if (staticProps) EventCalendar_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function EventCalendar_toPropertyKey(t) { var i = EventCalendar_toPrimitive(t, "string"); return "symbol" == EventCalendar_typeof(i) ? i : i + ""; }
function EventCalendar_toPrimitive(t, r) { if ("object" != EventCalendar_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != EventCalendar_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }

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
    _classPrivateFieldInitSpec(this, _today, new Date());
    _classPrivateFieldInitSpec(this, _days, void 0);
    _classPrivateFieldInitSpec(this, _month, void 0);
    _classPrivateFieldInitSpec(this, _year, void 0);
    _classPrivateFieldInitSpec(this, _events, []);
    _classPrivateFieldInitSpec(this, _defaultEvents, [new CalendarEvent({
      title: "Today",
      start: {
        day: _classPrivateFieldGet(_today, this).getDate(),
        month: _classPrivateFieldGet(_today, this).getMonth() + 1,
        year: _classPrivateFieldGet(_today, this).getFullYear()
      },
      themeColor: "#8a4af3"
    })]);
    _classPrivateFieldInitSpec(this, _selectedDay, null);
    _classPrivateFieldInitSpec(this, _customEventStore, []);
    _classPrivateFieldInitSpec(this, _queuedCustomEvents, []);
    // this.htmlElement = targetElement;
    if (this.validateNoDuplicateEvents(events)) {
      this.events = events;
    } else {
      throw "Duplicate Events Not Allowed";
    }
    this.setup();
  }
  return EventCalendar_createClass(EventCalendar, [{
    key: "month",
    get: function get() {
      return _classPrivateFieldGet(_month, this);
    },
    set: function set(month) {
      _classPrivateFieldSet(_month, this, month);
      if (this.month > 11) {
        _classPrivateFieldSet(_month, this, 0);
        this.year++;
      } else if (this.month < 0) {
        _classPrivateFieldSet(_month, this, 11);
        this.year--;
      }

      //dispatch event
      this.dispatchCustomEvent("monthChanged", this.month);

      // update days
      this.updateDays();
    }
  }, {
    key: "year",
    get: function get() {
      return _classPrivateFieldGet(_year, this);
    },
    set: function set(year) {
      _classPrivateFieldSet(_year, this, year);
      this.dispatchCustomEvent("yearChanged", this.year);

      // update days
      this.updateDays();
    }
  }, {
    key: "events",
    get: function get() {
      return _classPrivateFieldGet(_events, this);
    },
    set: function set(events) {
      events.map(function (ev) {
        return new CalendarEvent(ev);
      });

      // convert to calendar event if its not already
      _classPrivateFieldSet(_events, this, events.map(function (ev) {
        return ev instanceof CalendarEvent ? ev : new CalendarEvent(ev);
      }));
      this.updateDays();
      this.dispatchCustomEvent("eventsChanged", this.events);
    }
  }, {
    key: "selectedDay",
    get: function get() {
      return _classPrivateFieldGet(_selectedDay, this);
    },
    set: function set(day) {
      _classPrivateFieldSet(_selectedDay, this, day);
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
      var x = _classPrivateFieldGet(_days, this).map(function (day) {
        return {
          day: day,
          events: _this.getEventsForDay(day)
        };
      });
      return x;
    },
    set: function set(days) {
      _classPrivateFieldSet(_days, this, days);
      this.dispatchCustomEvent("daysChanged", this.days);
    }
  }, {
    key: "customEventStore",
    get: function get() {
      return _classPrivateFieldGet(_customEventStore, this);
    },
    set: function set(customEvents) {
      _classPrivateFieldSet(_customEventStore, this, []);
    }
  }, {
    key: "setup",
    value: function setup() {
      this.events = this.events.concat(_classPrivateFieldGet(_defaultEvents, this));
      this.month = _classPrivateFieldGet(_today, this).getMonth();
      this.year = _classPrivateFieldGet(_today, this).getFullYear();
      this.days = this.getDaysInMonth(this.month, this.year);
    }
  }, {
    key: "on",
    value: function on(customEvent, callback) {
      var _this2 = this;
      _classPrivateFieldGet(_customEventStore, this).push({
        customEventName: customEvent,
        callback: callback
      });

      // check and even with this name is queued
      var queuedCallsForThisEvent = _classPrivateFieldGet(_queuedCustomEvents, this).filter(function (ev) {
        return ev.customEventName === customEvent;
      });
      if (queuedCallsForThisEvent.length > 0) {
        queuedCallsForThisEvent.forEach(function (ev) {
          _this2.dispatchCustomEvent(ev.customEventName, ev.data);
        });

        // clear queued calls
        _classPrivateFieldSet(_queuedCustomEvents, this, _classPrivateFieldGet(_queuedCustomEvents, this).filter(function (ev) {
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
      if (!(event instanceof CalendarEvent)) {
        event = new CalendarEvent(event);
      }

      // make sure event is not already in events
      if (this.validateEventDoesntExistsAlready(event)) {
        this.events = this.events.concat(event);
      } else {
        throw "Duplicate Events Not Allowed";
      }
    }
  }, {
    key: "removeEvent",
    value: function removeEvent(event) {
      // make sure event is an instance of CalendarEvent
      if (!(event instanceof CalendarEvent)) {
        event = new CalendarEvent(event);
      }
      this.events = this.events.filter(function (ev) {
        return ev.title !== event.title && JSON.stringify(ev) !== JSON.stringify(event);
      });
    }
  }, {
    key: "dispatchCustomEvent",
    value: function dispatchCustomEvent(customEvent, data) {
      var _this3 = this;
      if (_classPrivateFieldGet(_customEventStore, this).length > 0) {
        _classPrivateFieldGet(_customEventStore, this).forEach(function (ev) {
          if (ev.customEventName === customEvent) {
            ev.callback(data, _this3);
          }
        });
      } else {
        _classPrivateFieldGet(_queuedCustomEvents, this).push({
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
      var eventEnd = new Date(eventEndYear, eventEndMonth - 1, eventEndDay);

      //if its weekly event
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
        }

        //for multi day events
        else if (day.getTime() >= eventStart.getTime() && day.getTime() <= eventEnd.getTime()) {
          return true;
        } else {
          return false;
        }
      }
    }

    // makes sure event is not already in events
  }, {
    key: "validateEventDoesntExistsAlready",
    value: function validateEventDoesntExistsAlready(event) {
      var _this$events;
      var eventsAvailable = (_this$events = this.events) !== null && _this$events !== void 0 ? _this$events : [];
      return eventsAvailable.filter(function (ev) {
        return JSON.stringify(ev) === JSON.stringify(event);
      }).length === 0;
    }

    //make sure no duplicate events are
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
}();

;// CONCATENATED MODULE: ./src/index.js



/******/ 	return __webpack_exports__;
/******/ })()
;
});