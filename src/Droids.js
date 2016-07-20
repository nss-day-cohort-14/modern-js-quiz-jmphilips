"use strict";

var Robot = require('./Robots');

var Droids = function () {
	this.health = 110
	this.class = "Droids";
};

Droids.prototype = new Robot();

module.exports = Droids;