var elem_styles = require('./elem_styles');

module.exports = class TimelineElem {
  constructor(date, icon, logo, subtitle, title, skillsArr, styles) {
    this.date = date;
    this.icon = icon;
    this.logo = logo;
    this.subtitle = subtitle;
    this.title = title;
    this.skillsArr = skillsArr;
    this.styles = elem_styles;
  }
}



