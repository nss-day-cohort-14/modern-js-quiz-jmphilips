"use strict"

var attacker = (attacked, defended) => {
	defended.health -= attacked.attack - defended.defense;
	return defended.health;
};

module.exports = attacker;