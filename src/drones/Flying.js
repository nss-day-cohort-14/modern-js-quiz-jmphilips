"use strict";

var Drones = require('../Drones');

var Flying = function (name) {
	this.name = name;
	this.attackRange = 18;
	this.defense = 2;
	this.type = "Flying";
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4));
	this.health = this.healthRange + (Math.floor(Math.random() * 30));
};

Flying.prototype = new Drones();

module.exports = Flying;