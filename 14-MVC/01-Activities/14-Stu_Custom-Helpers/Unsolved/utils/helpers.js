const dayjs = require('dayjs');
module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  exhibition_date: (end_date) => {
    return dayjs(end_date).add(5, 'years').format('M/D/YYYY');
  }
};
