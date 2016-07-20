"use strict";

var Droids = require('../Droids');

var R2 = function (name) {
	this.name = name;
	this.attackRange = 18;
	this.defense = 7;
	this.type = "R2";
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4));
};

R2.prototype = new Droids();

module.exports = R2;