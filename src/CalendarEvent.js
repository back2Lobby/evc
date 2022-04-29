export default class CalendarEvent {
  constructor({ title, start, end = null, themeColor = "#03a9f4" }) {
    this.title = title;

    // if end day of weekly event is given but no start is given
    if (
      end &&
      end.weekDay !== undefined &&
      Number.isInteger(end.weekDay) &&
      (start.weekDay === undefined || !Number.isInteger(start.weekDay))
    ) {
      throw "End day of weekly event is given but no start day is given";
    }

    this.start = start;
    this.end = end ?? {};

    Object.assign(this.end, end ?? this.start);

    if (this.validateHexColor(themeColor)) {
      this.themeColor = themeColor;
    }
  }

  validateHexColor(color) {
    if (color.match(/^#([0-9a-f]{3}){1,2}$/i) !== null) {
      return true;
    } else {
      throw "Invalid hex color " + color;
    }
  }
}
