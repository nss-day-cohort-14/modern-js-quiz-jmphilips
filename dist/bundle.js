(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"

var attacker = (attacked, defended) => {
	defended.health -= attacked.attack - defended.defense;
	return defended.health;
};

module.exports = attacker;
},{}],2:[function(require,module,exports){
"use strict";

var Robot = require('./Robots');

var Cops = function () {
	this.health = 90
	this.class = "Cop";
};

Cops.prototype = new Robot();

module.exports = Cops;
},{"./Robots":5}],3:[function(require,module,exports){
"use strict";

var Robot = require('./Robots');

var Droids = function () {
	this.health = 110
	this.class = "Droids";
};

Droids.prototype = new Robot();

module.exports = Droids;
},{"./Robots":5}],4:[function(require,module,exports){
"use strict";

var Robot = require('./Robots');

var Drones = function () {
	this.health = 70
	this.class = "Drones";
};

Drones.prototype = new Robot();

module.exports = Drones;
},{"./Robots":5}],5:[function(require,module,exports){
"use strict";

var Robot = function () {
	this.class = null;
	this.type = null;
	this.health = null;
	this.attackRange = null;
	this.defense = null;
	this.name = null;
};

module.exports = Robot;
},{}],6:[function(require,module,exports){
"use strict"

let Template = (character, card) => {
	$('<h3></h3>').text("Name: " + character.name).appendTo(card);
	$('<p></p>').text("Attack: " + character.attack).appendTo(card);
	$('<p></p>').text("Defense: " + character.defense).appendTo(card);
	$('<p></p>').text("Class: " + character.class).appendTo(card);
	$('<p></p>').text("Type: " + character.type).appendTo(card);
};

module.exports = Template;
},{}],7:[function(require,module,exports){
"use strict";

$(document).ready(function() {
	$('#button-div').hide()
});


const Robocop = require('./cops/Robocop');
const Robots = require('./Robots');
const Terminator = require('./cops/Terminate');
const R2 = require('./droids/R2');
const Wall = require('./droids/Wall');
const Walking = require('./drones/Walking');
const Flying = require('./drones/Flying');
const Template = require('./Template.js');
const attacker = require('./Attack.js')

let robotOne,
	robotTwo;	 

let count = 0;

var filterRobot = (selector, jqID) => {
	let currentRobot = null;

	if (selector === "Robocop") {
		currentRobot = new Robocop(jqID);
	};

	if (selector === "Terminator") {
		currentRobot = new Terminator(jqID);
	};

	if (selector === "R2") {
		currentRobot = new R2(jqID);
	};

	if (selector === "Wall") {
		currentRobot = new Wall(jqID);
	};

	if (selector === "Walking") {
		currentRobot = new Walking(jqID);
	};

	if (selector === "Flying") {
		currentRobot = new Flying(jqID);
	};

	return currentRobot
};

$('#robotOneType').change(() => {
	robotOne = filterRobot($("#robotOneType").val(), $("#robotOneName").val());
});

$('#robotTwoType').change(() => {
	robotTwo = filterRobot($("#robotTwoType").val(), $("#robotTwoName").val());
});

$('#maker').click(() => {
	Template(robotOne, $('#robotOneCard'));
	Template(robotTwo, $('#robotTwoCard'));
	$("#maker").hide();
	$("#main-banner").hide();
	$('#button-div').show()
});

$('#nextRound').click(() => {
	if (count % 2 === 0) {
		console.log(attacker(robotOne, robotTwo))
	} else {console.log(attacker(robotTwo, robotOne))}
	count++;
});

$(document).ready(function() {
	$('select').material_select();
});
            
},{"./Attack.js":1,"./Robots":5,"./Template.js":6,"./cops/Robocop":8,"./cops/Terminate":9,"./droids/R2":10,"./droids/Wall":11,"./drones/Flying":12,"./drones/Walking":13}],8:[function(require,module,exports){
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

},{"../Cops":2}],9:[function(require,module,exports){
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
},{"../Cops":2}],10:[function(require,module,exports){
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
},{"../Droids":3}],11:[function(require,module,exports){
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
},{"../Droids":3}],12:[function(require,module,exports){
"use strict";

var Drones = require('../Drones');

var Flying = function (name) {
	this.name = name;
	this.attackRange = 18;
	this.defense = 2;
	this.type = "Flying";
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4));
};

Flying.prototype = new Drones();

module.exports = Flying;
},{"../Drones":4}],13:[function(require,module,exports){
"use strict";

var Drones = require('../Drones');

var Walking = function (name) {
	this.name = name;
	this.attackRange = 20;
	this.defense = 0;
	this.type = "Walking";
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4));
};

Walking.prototype = new Drones();

module.exports = Walking;
},{"../Drones":4}]},{},[7])


//# sourceMappingURL=bundle.js.map
