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
	this.healthRange = 90
	this.class = "Cop";
};

Cops.prototype = new Robot();

module.exports = Cops;
},{"./Robots":5}],3:[function(require,module,exports){
"use strict";

var Robot = require('./Robots');

var Droids = function () {
	this.healthRange = 110
	this.class = "Droids";
};

Droids.prototype = new Robot();

module.exports = Droids;
},{"./Robots":5}],4:[function(require,module,exports){
"use strict";

var Robot = require('./Robots');

var Drones = function () {
	this.healthRange = 70
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
	this.healthRange = null;
};

module.exports = Robot;
},{}],6:[function(require,module,exports){
"use strict"

let Sentence = (attacker, defender) => {
	$('<p></p>').text(attacker.name + " attacked " + defender.name).appendTo($("#battlefield"))
};

module.exports = Sentence;
},{}],7:[function(require,module,exports){
"use strict"

let Template = (character, card) => {
	$('<h3></h3>').text("Name: " + character.name).appendTo(card);
	$('<p></p>').text("Attack: " + character.attack).appendTo(card);
	$('<p></p>').text("Defense: " + character.defense).appendTo(card);
	$('<p></p>').text("Class: " + character.class).appendTo(card);
	$('<p></p>').text("Type: " + character.type).appendTo(card);
	$('<p></p>').text("Health: " + character.health).appendTo(card);
};

module.exports = Template;
},{}],8:[function(require,module,exports){
"use strict";

let Winner = (attacker) => {
	$('<h1></h1>').text(attacker.name + " Wins").prependTo($("#battlefield"));
};

module.exports = Winner;
},{}],9:[function(require,module,exports){
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
const attacker = require('./Attack.js');
const Sentence = require('./Sentence');
const Winner = require('./Winner');

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
		attacker(robotOne, robotTwo);
		Sentence(robotOne, robotTwo);
		$("#robotOneCard").empty();
		$("#robotTwoCard").empty();
		if (robotTwo.health <= 0) {
			robotTwo.health = 0;
			Winner(robotOne);
			$('#button-div').hide();
		};
		Template(robotOne, $('#robotOneCard'));
		Template(robotTwo, $('#robotTwoCard'));
	} else {
		attacker(robotTwo, robotOne);
		Sentence(robotTwo, robotOne);
		$("#robotOneCard").empty();
		$("#robotTwoCard").empty();
		console.log("Ok")
		if (robotOne.health <= 0) {
			robotOne.health = 0;
			Winner(robotTwo);
			$('#button-div').hide();
		}
		Template(robotOne, $('#robotOneCard'));
		Template(robotTwo, $('#robotTwoCard'));
	};
	count++;
});

$(document).ready(function() {
	$('select').material_select();
});
            
},{"./Attack.js":1,"./Robots":5,"./Sentence":6,"./Template.js":7,"./Winner":8,"./cops/Robocop":10,"./cops/Terminate":11,"./droids/R2":12,"./droids/Wall":13,"./drones/Flying":14,"./drones/Walking":15}],10:[function(require,module,exports){
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

},{"../Cops":2}],11:[function(require,module,exports){
"use strict";

var Cops = require('../Cops');

var Terminator = function (name) {
	this.name = name;
	this.attackRange = 12;
	this.defense = 6;
	this.type = "Terminator"
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4));
	this.health = this.healthRange + (Math.floor(Math.random() * 30));
};

Terminator.prototype = new Cops();

module.exports = Terminator;
},{"../Cops":2}],12:[function(require,module,exports){
"use strict";

var Droids = require('../Droids');

var R2 = function (name) {
	this.name = name;
	this.attackRange = 18;
	this.defense = 7;
	this.type = "R2";
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4));
	this.health = this.healthRange + (Math.floor(Math.random() * 30));
};

R2.prototype = new Droids();

module.exports = R2;
},{"../Droids":3}],13:[function(require,module,exports){
"use strict";

var Droids = require('../Droids');

var Wall = function (name) {
	this.name = name;
	this.attackRange = 7;
	this.defense = 8;
	this.type = "Wall";
	this.attack = (this.attackRange) + (Math.floor(Math.random() * 4));
	this.health = this.healthRange + (Math.floor(Math.random() * 30));
};

Wall.prototype = new Droids();

module.exports = Wall;
},{"../Droids":3}],14:[function(require,module,exports){
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
},{"../Drones":4}],15:[function(require,module,exports){
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
},{"../Drones":4}]},{},[9])


//# sourceMappingURL=bundle.js.map
