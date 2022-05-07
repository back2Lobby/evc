<h1 align="center" style="border-bottom:none">
  EVC
</h1>
<p align="center">
    A simple javascript tool to manage event calendars
</p>
<hr>
<br>
A javascript event calendar management tool that can be integrated with any UI.

> Check out the [demo](https://evcdemo.onrender.com/) and explore the [demo repository](https://github.com/back2Lobby/evcdemo).

## Installation:
1. Using CDN:

    https://cdn.jsdelivr.net/gh/back2Lobby/evc/dist/evc.min.js
2. Using NPM:
    
        npm install evc
## Usage:
### With NPM Package:
We can specify the events in the `EventCalendar` class constructor. Then we can listen to the custom events fired by evc and update our UI accordingly by chaining the `on` method.
```javascript
  import EventCalendar from "evc";

  const evc = new EventCalendar([
    {
      title: "John's Birthday",
      start: {
        day: 23,
        month: 4,
      },
    }
  ]).on("yearChanged",(year) => {
    // whatever you want to do when year is changed. Maybe update the UI like this
    document.querySelector("#calendarHeader #thisYear").innerHTML = year;
  }).on("monthChanged",(month) => {
    // ...
  }).on("daysChanged",(days) => {
    // ...
  }).on("selectedDayChanged",(selectedDay) => {
    // ...
  });

  // changing month
  evc.month++;

```

### With CDN:
Using evc with CDN is same as using npm package except that we need to wrap the classes in a global variable `EVC`. Something like this:
```javascript
const evc = new EVC.EventCalendar([
    {
      title: "John's Birthday",
      start: {
        day: 23,
        month: 4,
      },
    }
  ])
```

# Documentation:

## EventCalendar Class:
  Event Calendar is a class that manages the events and the calendar. By default, it will be created with the current month and year.

  ```javascript
  // example creating a new EventCalendar
  new EventCalendar([events]);
  ```
  where `events` is an array of objects of class [CalendarEvent](#calendarevent-class)
### Properties:
| Property | Description |
| ----------- | ----------- |
| `events` | An array of objects of class [CalendarEvent](#calendarevent-class) or a simple js object with similar properties |
| `days` | Array of objects containing two properties: <ul><li>days: A JavaScript date object</li><li>events: An array of objects of class [CalendarEvent](#calendarevent-class) representing events on this day</li></ul> |
| `month` | Target month (1-12). Changing this value will triggered the 'monthChanged' event |
| `year` | Target year. Changing this value will triggered the 'yearChanged' event |
| `selectedDay` | The currently selected day (`null` by default). Changing this value will triggered the 'selectedDayChanged' event |

## CalendarEvent Class:
  A class that represents an event. Here are some type of events that can be created:

  **Single Day Events**
  ```javascript
  new CalendarEvent({
    title: "Important Meeting",
    start: {
      day: 23,
      month: 5,
      year: 2022
    },
    themeColor : "#cf3333",
  })
  ```

  **Multi-day Events**
  ```javascript
  new CalendarEvent({
    title: "Exams",
    start: {
      day: 5,
      month: 7,
      year: 2022
    },
    end: {
      day: 19,
      month: 7,
      year: 2022
    },
    themeColor : "#2196f3",
  })
  ```
  **Weekly Events**
  ```javascript
  new CalendarEvent({
    title: "Sunday",
    start: {
      weekDay: 0
    },
    themeColor : "#8bc34a",
  })
  ```

  **Monthly Events**
  ```javascript
  new CalendarEvent({
    title: "Monthly Exams",
    start: {
      day: 15
    },
    end: {
      day: 21
    }
    themeColor : "#333333",
  })
  ```

  **Yearly Events**
  ```javascript
  new CalendarEvent({
    title: "John's Birthday",
    start: {
      day: 26,
      month: 7
    }
    themeColor : "#8a4af3",
  })
  ```

### Properties:
| Property | Required In Constructor | Description |
| ----------- | ----------- | ----------- |
| `title` | YES | The title of the event |
| `start` | YES | The start date of the event. It should be an object with following properties: <ul><li>day: They day of month (1-31 depending on month)</li><li>month: The month of year (1-12)</li><li>year: Target year e.i. 2022</li><li>weekDay: The day of week in numeric form (0-6 starting from Sunday)</li></ul>|
| `end` | NO | The end date of the event (format same as `start`). If not specified, same date as `start` will be used indicating a single day event |
| `themeColor` | NO | The color of the event in hexadecimal form (by default #03a9f4) |

## Events:
| Event | Description |
| --- | --- |
| **daysChanged** | Triggered when days are changed i.e. when month is changed then it will trigger the callback providing the new days of this month that can be displayed in UI |
| **monthChanged** | Triggered by simply changing the month like `evc.month++` or by changing the year. Also it will always trigger the 'daysChanged' event with it. |
| **yearChanged** | Triggered by changing year like `evc.year++` or by changing the months. |
| **selectedDayChanged** | Triggers when the currently selected day is changed. Its `null` by default. Selected day can be changed like `evc.selectedDay = day` where `day` should be from the days you get from `evc.days` |
| **eventsChanged** | Triggered when the events are changed. It passes the new events array to callback. |
