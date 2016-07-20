"use strict";

var Robot = require('./Robots');

var Drones = function () {
	this.health = 70
	this.class = "Drones";
};

Drones.prototype = new Robot();

module.exports = Drones;