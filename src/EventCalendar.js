import CalendarEvent from "./CalendarEvent";

export default class EventCalendar {
  #_today = new Date();
  #_days;
  #_month;
  #_year;
  #_events = [];
  #_defaultEvents = [
    new CalendarEvent({
      title: "Today",
      start: {
        day: this.#_today.getDate(),
        month: this.#_today.getMonth() + 1,
        year: this.#_today.getFullYear(),
      },
      themeColor: "#8a4af3",
    }),
  ];
  #_selectedDay = null;
  #_customEventStore = [];
  #_queuedCustomEvents = [];

  constructor({ events = [] } = {}) {
    // this.htmlElement = targetElement;
    if (this.validateNoDuplicateEvents(events)) {
      this.events = events;
    } else {
      throw "Duplicate Events Not Allowed";
    }

    this.setup();
  }

  set month(month) {
    this.#_month = month;

    if (this.month > 11) {
      this.#_month = 0;

      this.year++;
    } else if (this.month < 0) {
      this.#_month = 11;

      this.year--;
    }

    //dispatch event
    this.dispatchCustomEvent("monthChanged", this.month);

    // update days
    this.updateDays();
  }

  get month() {
    return this.#_month;
  }

  set year(year) {
    this.#_year = year;

    this.dispatchCustomEvent("yearChanged", this.year);

    // update days
    this.updateDays();
  }

  get year() {
    return this.#_year;
  }

  set events(events) {
    events.map((ev) => new CalendarEvent(ev));

    // convert to calendar event if its not already
    this.#_events = events.map((ev) =>
      ev instanceof CalendarEvent ? ev : new CalendarEvent(ev)
    );

    this.updateDays();

    this.dispatchCustomEvent("eventsChanged", this.events);
  }

  get events() {
    return this.#_events;
  }

  set selectedDay(day) {
    this.#_selectedDay = day;

    this.dispatchCustomEvent("selectedDayChanged", {
      day: this.selectedDay,
      events: this.getEventsForDay(day),
    });

    this.updateDays();
  }

  get selectedDay() {
    return this.#_selectedDay;
  }

  set days(days) {
    this.#_days = days;

    this.dispatchCustomEvent("daysChanged", this.days);
  }

  get days() {
    let x = this.#_days.map((day) => {
      return {
        day: day,
        events: this.getEventsForDay(day),
      };
    });

    return x;
  }

  set customEventStore(customEvents) {
    this.#_customEventStore = [];
  }

  get customEventStore() {
    return this.#_customEventStore;
  }

  setup() {
    this.events = this.events.concat(this.#_defaultEvents);
    this.month = this.#_today.getMonth();
    this.year = this.#_today.getFullYear();
    this.days = this.getDaysInMonth(this.month, this.year);
  }

  on(customEvent, callback) {
    this.#_customEventStore.push({
      customEventName: customEvent,
      callback: callback,
    });

    // check and even with this name is queued
    const queuedCallsForThisEvent = this.#_queuedCustomEvents.filter(
      (ev) => ev.customEventName === customEvent
    );
    if (queuedCallsForThisEvent.length > 0) {
      queuedCallsForThisEvent.forEach((ev) => {
        this.dispatchCustomEvent(ev.customEventName, ev.data);
      });

      // clear queued calls
      this.#_queuedCustomEvents = this.#_queuedCustomEvents.filter(
        (ev) => ev.customEventName !== customEvent
      );
    }

    return this;
  }

  updateDays() {
    if (
      this.month !== undefined &&
      Number.isInteger(this.month) &&
      this.year !== undefined &&
      Number.isInteger(this.year)
    ) {
      this.days = this.getDaysInMonth(this.month, this.year);
    }
  }

  addEvent(event) {
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

  dispatchCustomEvent(customEvent, data) {
    if (this.#_customEventStore.length > 0) {
      this.#_customEventStore.forEach((ev) => {
        if (ev.customEventName === customEvent) {
          ev.callback(data, this);
        }
      });
    } else {
      this.#_queuedCustomEvents.push({
        customEventName: customEvent,
        data: data,
      });
    }
  }

  getEventsForDay(day) {
    let eventsFound = [];
    this.events.forEach((event) => {
      if (this.checkDayHasEvent(day, event)) {
        eventsFound.push(event);
      }
    });
    return eventsFound;
  }

  checkDayHasEvent(day, event) {
    // check if all values is not undefined and is integer
    let validIntegers = (...value) =>
      value.every((v) => v !== undefined && Number.isInteger(v));

    let checkSameObj = (obj1, obj2) =>
      JSON.stringify(obj1) === JSON.stringify(obj2);

    let eventStartDay =
      validIntegers(event.start.day) === false ? 1 : event.start.day;
    let eventStartMonth =
      validIntegers(event.start.month) === false
        ? validIntegers(event.start.year)
          ? 1
          : day.getMonth() + 1
        : event.start.month;
    let eventStartYear =
      validIntegers(event.start.year) === false
        ? day.getFullYear()
        : event.start.year;
    let eventStartWeekDay =
      validIntegers(event.start.weekDay) === false ? null : event.start.weekDay;

    let eventEndDay =
      validIntegers(event.end.day) === false ? eventStartDay : event.end.day;
    let eventEndMonth =
      validIntegers(event.end.month) === false
        ? eventStartMonth
        : event.end.month;
    let eventEndYear =
      validIntegers(event.end.year) === false ? eventStartYear : event.end.year;
    let eventEndWeekDay =
      validIntegers(event.end.weekDay) === false
        ? eventStartWeekDay
        : event.end.weekDay;

    let eventStart = new Date(
      eventStartYear,
      eventStartMonth - 1,
      eventStartDay
    );
    let eventEnd = new Date(eventEndYear, eventEndMonth - 1, eventEndDay);

    //if its weekly event
    if (eventStartWeekDay !== null) {
      if (
        eventStartWeekDay !== null &&
        day.getDay() === eventStartWeekDay &&
        eventEndWeekDay === null
      ) {
        return true;
      } else if (
        eventStartWeekDay !== null &&
        eventEndWeekDay !== null &&
        day.getDay() >= eventStartWeekDay &&
        day.getDay() <= eventEndWeekDay
      ) {
        return true;
      }
    } else {
      //for single day events
      if (
        this.matchSameDate(day, eventStart) &&
        this.matchSameDate(day, eventEnd)
      ) {
        return true;
      }

      //for multi day events
      else if (
        day.getTime() >= eventStart.getTime() &&
        day.getTime() <= eventEnd.getTime()
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  // makes sure event is not already in events
  validateEventDoesntExistsAlready(event) {
    let eventsAvailable = this.events ?? [];

    return (
      eventsAvailable.filter(
        (ev) =>
          ev.title === event.title &&
          ev.start.getTime() === event.start.getTime() &&
          ev.end.getTime() === event.end.getTime()
      ).length === 0
    );
  }

  //make sure no duplicate events are
  validateNoDuplicateEvents(events) {
    let foundDuplicate = false;
    events.forEach((event) => {
      if (foundDuplicate === true) {
        return;
      }

      if (
        events.filter((ev) => JSON.stringify(ev) === JSON.stringify(event))
          .length > 1
      ) {
        foundDuplicate = true;
      }
    });

    return !foundDuplicate;
  }

  getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  matchSameDate(date1, date2) {
    return (
      date1 &&
      date2 &&
      date1.getFullYear() === date2.getFullYear() &&
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth()
    );
  }
}
