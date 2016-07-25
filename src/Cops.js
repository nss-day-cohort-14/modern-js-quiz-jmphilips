"use strict";

var Robot = require('./Robots');

var Cops = function () {
	this.healthRange = 90;
	this.class = "Cop";
};

Cops.prototype = new Robot();

module.exports = Cops;