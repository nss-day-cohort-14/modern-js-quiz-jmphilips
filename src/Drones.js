"use strict";

var Robot = require('./Robots');

var Drones = function () {
	this.healthRange = 70;
	this.class = "Drones";
};

Drones.prototype = new Robot();

module.exports = Drones;