"use strict";

var Cops = require('../Cops');

var Robocop = function (name) {
	this.name = name;
	this.attackRange = 11;
	this.defense = 7;
	this.type = "Robocop"
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4));
};

Robocop.prototype = new Cops();

module.exports = Robocop;
