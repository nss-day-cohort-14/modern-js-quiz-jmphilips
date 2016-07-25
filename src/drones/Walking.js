"use strict";

var Drones = require('../Drones');

var Walking = function (name) {
	this.name = name;
	this.attackRange = 20;
	this.defense = 0;
	this.type = "Walking";
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4));
	this.health = this.healthRange + (Math.floor(Math.random() * 30));
};

Walking.prototype = new Drones();

module.exports = Walking;