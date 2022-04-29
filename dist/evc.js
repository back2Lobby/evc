/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
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
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CalendarEvent.js":
/*!******************************!*\
  !*** ./src/CalendarEvent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CalendarEvent)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar CalendarEvent = /*#__PURE__*/function () {\n  function CalendarEvent(_ref) {\n    var title = _ref.title,\n        start = _ref.start,\n        _ref$end = _ref.end,\n        end = _ref$end === void 0 ? null : _ref$end,\n        _ref$themeColor = _ref.themeColor,\n        themeColor = _ref$themeColor === void 0 ? \"#03a9f4\" : _ref$themeColor;\n\n    _classCallCheck(this, CalendarEvent);\n\n    this.title = title; // if end day of weekly event is given but no start is given\n\n    if (end && end.weekDay !== undefined && Number.isInteger(end.weekDay) && (start.weekDay === undefined || !Number.isInteger(start.weekDay))) {\n      throw \"End day of weekly event is given but no start day is given\";\n    }\n\n    this.start = start;\n    this.end = end !== null && end !== void 0 ? end : {};\n    Object.assign(this.end, end !== null && end !== void 0 ? end : this.start);\n\n    if (this.validateHexColor(themeColor)) {\n      this.themeColor = themeColor;\n    }\n  }\n\n  _createClass(CalendarEvent, [{\n    key: \"validateHexColor\",\n    value: function validateHexColor(color) {\n      if (color.match(/^#([0-9a-f]{3}){1,2}$/i) !== null) {\n        return true;\n      } else {\n        throw \"Invalid hex color \" + color;\n      }\n    }\n  }]);\n\n  return CalendarEvent;\n}();\n\n\n\n//# sourceURL=webpack://EVC/./src/CalendarEvent.js?");

/***/ }),

/***/ "./src/EventCalendar.js":
/*!******************************!*\
  !*** ./src/EventCalendar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventCalendar)\n/* harmony export */ });\n/* harmony import */ var _CalendarEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarEvent */ \"./src/CalendarEvent.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\n\n\nvar _today = /*#__PURE__*/new WeakMap();\n\nvar _days = /*#__PURE__*/new WeakMap();\n\nvar _month = /*#__PURE__*/new WeakMap();\n\nvar _year = /*#__PURE__*/new WeakMap();\n\nvar _events = /*#__PURE__*/new WeakMap();\n\nvar _defaultEvents = /*#__PURE__*/new WeakMap();\n\nvar _selectedDay = /*#__PURE__*/new WeakMap();\n\nvar _customEventStore = /*#__PURE__*/new WeakMap();\n\nvar _queuedCustomEvents = /*#__PURE__*/new WeakMap();\n\nvar EventCalendar = /*#__PURE__*/function () {\n  function EventCalendar() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _ref$events = _ref.events,\n        events = _ref$events === void 0 ? [] : _ref$events;\n\n    _classCallCheck(this, EventCalendar);\n\n    _classPrivateFieldInitSpec(this, _today, {\n      writable: true,\n      value: new Date()\n    });\n\n    _classPrivateFieldInitSpec(this, _days, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(this, _month, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(this, _year, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(this, _events, {\n      writable: true,\n      value: []\n    });\n\n    _classPrivateFieldInitSpec(this, _defaultEvents, {\n      writable: true,\n      value: [new _CalendarEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        title: \"Today\",\n        start: {\n          day: _classPrivateFieldGet(this, _today).getDate(),\n          month: _classPrivateFieldGet(this, _today).getMonth() + 1,\n          year: _classPrivateFieldGet(this, _today).getFullYear()\n        },\n        themeColor: \"#8a4af3\"\n      })]\n    });\n\n    _classPrivateFieldInitSpec(this, _selectedDay, {\n      writable: true,\n      value: null\n    });\n\n    _classPrivateFieldInitSpec(this, _customEventStore, {\n      writable: true,\n      value: []\n    });\n\n    _classPrivateFieldInitSpec(this, _queuedCustomEvents, {\n      writable: true,\n      value: []\n    });\n\n    // this.htmlElement = targetElement;\n    if (this.validateNoDuplicateEvents(events)) {\n      this.events = events;\n    } else {\n      throw \"Duplicate Events Not Allowed\";\n    }\n\n    this.setup();\n  }\n\n  _createClass(EventCalendar, [{\n    key: \"month\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _month);\n    },\n    set: function set(month) {\n      _classPrivateFieldSet(this, _month, month);\n\n      if (this.month > 11) {\n        _classPrivateFieldSet(this, _month, 0);\n\n        this.year++;\n      } else if (this.month < 0) {\n        _classPrivateFieldSet(this, _month, 11);\n\n        this.year--;\n      } //dispatch event\n\n\n      this.dispatchCustomEvent(\"monthChanged\", this.month); // update days\n\n      this.updateDays();\n    }\n  }, {\n    key: \"year\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _year);\n    },\n    set: function set(year) {\n      _classPrivateFieldSet(this, _year, year);\n\n      this.dispatchCustomEvent(\"yearChanged\", this.year); // update days\n\n      this.updateDays();\n    }\n  }, {\n    key: \"events\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _events);\n    },\n    set: function set(events) {\n      events.map(function (ev) {\n        return new _CalendarEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ev);\n      }); // convert to calendar event if its not already\n\n      _classPrivateFieldSet(this, _events, events.map(function (ev) {\n        return ev instanceof _CalendarEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ? ev : new _CalendarEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ev);\n      }));\n\n      this.updateDays();\n      this.dispatchCustomEvent(\"eventsChanged\", this.events);\n    }\n  }, {\n    key: \"selectedDay\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _selectedDay);\n    },\n    set: function set(day) {\n      _classPrivateFieldSet(this, _selectedDay, day);\n\n      this.dispatchCustomEvent(\"selectedDayChanged\", {\n        day: this.selectedDay,\n        events: this.getEventsForDay(day)\n      });\n      this.updateDays();\n    }\n  }, {\n    key: \"days\",\n    get: function get() {\n      var _this = this;\n\n      var x = _classPrivateFieldGet(this, _days).map(function (day) {\n        return {\n          day: day,\n          events: _this.getEventsForDay(day)\n        };\n      });\n\n      return x;\n    },\n    set: function set(days) {\n      _classPrivateFieldSet(this, _days, days);\n\n      this.dispatchCustomEvent(\"daysChanged\", this.days);\n    }\n  }, {\n    key: \"customEventStore\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _customEventStore);\n    },\n    set: function set(customEvents) {\n      _classPrivateFieldSet(this, _customEventStore, []);\n    }\n  }, {\n    key: \"setup\",\n    value: function setup() {\n      this.events = this.events.concat(_classPrivateFieldGet(this, _defaultEvents));\n      this.month = _classPrivateFieldGet(this, _today).getMonth();\n      this.year = _classPrivateFieldGet(this, _today).getFullYear();\n      this.days = this.getDaysInMonth(this.month, this.year);\n    }\n  }, {\n    key: \"on\",\n    value: function on(customEvent, callback) {\n      var _this2 = this;\n\n      _classPrivateFieldGet(this, _customEventStore).push({\n        customEventName: customEvent,\n        callback: callback\n      }); // check and even with this name is queued\n\n\n      var queuedCallsForThisEvent = _classPrivateFieldGet(this, _queuedCustomEvents).filter(function (ev) {\n        return ev.customEventName === customEvent;\n      });\n\n      if (queuedCallsForThisEvent.length > 0) {\n        queuedCallsForThisEvent.forEach(function (ev) {\n          _this2.dispatchCustomEvent(ev.customEventName, ev.data);\n        }); // clear queued calls\n\n        _classPrivateFieldSet(this, _queuedCustomEvents, _classPrivateFieldGet(this, _queuedCustomEvents).filter(function (ev) {\n          return ev.customEventName !== customEvent;\n        }));\n      }\n\n      return this;\n    }\n  }, {\n    key: \"updateDays\",\n    value: function updateDays() {\n      if (this.month !== undefined && Number.isInteger(this.month) && this.year !== undefined && Number.isInteger(this.year)) {\n        this.days = this.getDaysInMonth(this.month, this.year);\n      }\n    }\n  }, {\n    key: \"addEvent\",\n    value: function addEvent(event) {\n      // make sure event is an instance of CalendarEvent\n      if (event instanceof _CalendarEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n        // make sure event is not already in events\n        if (this.validateEventDoesntExistsAlready(event)) {\n          this.events = this.events.concat(event);\n        } else {\n          throw \"Duplicate Events Not Allowed\";\n        }\n      } else {\n        throw \"Event must be an instance of CalendarEvent\";\n      }\n    }\n  }, {\n    key: \"dispatchCustomEvent\",\n    value: function dispatchCustomEvent(customEvent, data) {\n      var _this3 = this;\n\n      if (_classPrivateFieldGet(this, _customEventStore).length > 0) {\n        _classPrivateFieldGet(this, _customEventStore).forEach(function (ev) {\n          if (ev.customEventName === customEvent) {\n            ev.callback(data, _this3);\n          }\n        });\n      } else {\n        _classPrivateFieldGet(this, _queuedCustomEvents).push({\n          customEventName: customEvent,\n          data: data\n        });\n      }\n    }\n  }, {\n    key: \"getEventsForDay\",\n    value: function getEventsForDay(day) {\n      var _this4 = this;\n\n      var eventsFound = [];\n      this.events.forEach(function (event) {\n        if (_this4.checkDayHasEvent(day, event)) {\n          eventsFound.push(event);\n        }\n      });\n      return eventsFound;\n    }\n  }, {\n    key: \"checkDayHasEvent\",\n    value: function checkDayHasEvent(day, event) {\n      // check if all values is not undefined and is integer\n      var validIntegers = function validIntegers() {\n        for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {\n          value[_key] = arguments[_key];\n        }\n\n        return value.every(function (v) {\n          return v !== undefined && Number.isInteger(v);\n        });\n      };\n\n      var checkSameObj = function checkSameObj(obj1, obj2) {\n        return JSON.stringify(obj1) === JSON.stringify(obj2);\n      };\n\n      var eventStartDay = validIntegers(event.start.day) === false ? 1 : event.start.day;\n      var eventStartMonth = validIntegers(event.start.month) === false ? validIntegers(event.start.year) ? 1 : day.getMonth() + 1 : event.start.month;\n      var eventStartYear = validIntegers(event.start.year) === false ? day.getFullYear() : event.start.year;\n      var eventStartWeekDay = validIntegers(event.start.weekDay) === false ? null : event.start.weekDay;\n      var eventEndDay = validIntegers(event.end.day) === false ? eventStartDay : event.end.day;\n      var eventEndMonth = validIntegers(event.end.month) === false ? eventStartMonth : event.end.month;\n      var eventEndYear = validIntegers(event.end.year) === false ? eventStartYear : event.end.year;\n      var eventEndWeekDay = validIntegers(event.end.weekDay) === false ? eventStartWeekDay : event.end.weekDay;\n      var eventStart = new Date(eventStartYear, eventStartMonth - 1, eventStartDay);\n      var eventEnd = new Date(eventEndYear, eventEndMonth - 1, eventEndDay); //if its weekly event\n\n      if (eventStartWeekDay !== null) {\n        if (eventStartWeekDay !== null && day.getDay() === eventStartWeekDay && eventEndWeekDay === null) {\n          return true;\n        } else if (eventStartWeekDay !== null && eventEndWeekDay !== null && day.getDay() >= eventStartWeekDay && day.getDay() <= eventEndWeekDay) {\n          return true;\n        }\n      } else {\n        //for single day events\n        if (this.matchSameDate(day, eventStart) && this.matchSameDate(day, eventEnd)) {\n          return true;\n        } //for multi day events\n        else if (day.getTime() >= eventStart.getTime() && day.getTime() <= eventEnd.getTime()) {\n          return true;\n        } else {\n          return false;\n        }\n      }\n    } // makes sure event is not already in events\n\n  }, {\n    key: \"validateEventDoesntExistsAlready\",\n    value: function validateEventDoesntExistsAlready(event) {\n      var _this$events;\n\n      var eventsAvailable = (_this$events = this.events) !== null && _this$events !== void 0 ? _this$events : [];\n      return eventsAvailable.filter(function (ev) {\n        return ev.title === event.title && ev.start.getTime() === event.start.getTime() && ev.end.getTime() === event.end.getTime();\n      }).length === 0;\n    } //make sure no duplicate events are\n\n  }, {\n    key: \"validateNoDuplicateEvents\",\n    value: function validateNoDuplicateEvents(events) {\n      var foundDuplicate = false;\n      events.forEach(function (event) {\n        if (foundDuplicate === true) {\n          return;\n        }\n\n        if (events.filter(function (ev) {\n          return JSON.stringify(ev) === JSON.stringify(event);\n        }).length > 1) {\n          foundDuplicate = true;\n        }\n      });\n      return !foundDuplicate;\n    }\n  }, {\n    key: \"getDaysInMonth\",\n    value: function getDaysInMonth(month, year) {\n      var date = new Date(year, month, 1);\n      var days = [];\n\n      while (date.getMonth() === month) {\n        days.push(new Date(date));\n        date.setDate(date.getDate() + 1);\n      }\n\n      return days;\n    }\n  }, {\n    key: \"matchSameDate\",\n    value: function matchSameDate(date1, date2) {\n      return date1 && date2 && date1.getFullYear() === date2.getFullYear() && date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth();\n    }\n  }]);\n\n  return EventCalendar;\n}();\n\n\n\n//# sourceURL=webpack://EVC/./src/EventCalendar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CalendarEvent\": () => (/* reexport safe */ _CalendarEvent__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"EventCalendar\": () => (/* reexport safe */ _EventCalendar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _EventCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventCalendar */ \"./src/EventCalendar.js\");\n/* harmony import */ var _CalendarEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarEvent */ \"./src/CalendarEvent.js\");\n\n\n\n\n//# sourceURL=webpack://EVC/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});