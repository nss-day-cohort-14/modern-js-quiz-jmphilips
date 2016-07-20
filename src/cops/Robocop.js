"use strict";

var Cops = require('../Cops');

var Robocop = function (name) {
	this.name = name;
	this.attackRange = 11;
	this.defense = 7;
	this.type = "Robocop"
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4));
	this.health = this.healthRange + (Math.floor(Math.random() * 30));
};

Robocop.prototype = new Cops();

module.exports = Robocop;
