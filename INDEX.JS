import moment from "moment";
import _ from 'lodash';
const lodash = require('lodash');
//let moment = require('moment');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format("MMM Do YY"));
console.log(moment().format("dddd"));

console.log(moment().isValid("2020-01-01"));
console.log(moment().isValid("2020-14-01"));

console.log(moment().add(7, "d"));

console.log(moment().add(7, "M"));
console.log(moment().add(7, "y"));
console.log(moment().subtract(7, "days"));
console.log(moment().subtract(7, "months"));
console.log(moment().subtract(7, "year"));

let a = moment([2015, 09, 11]);
let b = moment([2014, 11, 11]);
console.log(a.diff(b, 'years'));
console.log(a.diff(b, 'months'));
console.log(a.diff(b, 'days'));

let c = moment([2015, 09, 16]);
let d = moment([2014, 11, 27]);
console.log(c.diff(d, 'years'));
console.log(c.diff(d, 'months'));
console.log(c.diff(d, 'days'));

console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
console.log(_.difference([2, 1], [2, 3]));

console.log(_.every(users, { 'user': 'barney', 'active': false }));

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];

console.log(_.filter(users, function(o) { return !o.active; }));