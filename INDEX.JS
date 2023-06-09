import moment from "moment";
const lodash = require('lodash');
let moment = require('moment');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format("MMM Do YY"));

if (moment("2020-01-01", "YYYY-MM-DD").isValid() != moment.format("YYYY-MM-DD")) {
    return false
} else {
    return true
}

console.log(moment('2023', 'YYYY-MM-DD').isValid());