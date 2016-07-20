"use strict";

var Droids = require('../Droids');

var Wall = function (name) {
	this.name = name;
	this.attackRange = 7;
	this.defense = 8;
	this.type = "Wall";
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4))
};

Wall.prototype = new Droids();

module.exports = Wall;