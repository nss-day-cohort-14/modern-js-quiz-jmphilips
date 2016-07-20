"use strict";

var Robot = require('./Robots');

var Droids = function () {
	this.healthRange = 110
	this.class = "Droids";
};

Droids.prototype = new Robot();

module.exports = Droids;