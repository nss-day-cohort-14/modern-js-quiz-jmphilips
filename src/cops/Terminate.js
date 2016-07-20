"use strict";

var Cops = require('../Cops');

var Terminator = function (name) {
	this.name = name;
	this.attackRange = 12;
	this.defense = 6;
	this.type = "Terminator"
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4));
};

Terminator.prototype = new Cops();

module.exports = Terminator;