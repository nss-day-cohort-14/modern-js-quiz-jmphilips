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
const Sentence = require('./Sentence')

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
		Sentence(robotOne, robotTwo);
		console.log(attacker(robotOne, robotTwo))
	} else {
		Sentence(robotTwo, robotOne);
		console.log(attacker(robotTwo, robotOne))}
	count++;
});

$(document).ready(function() {
	$('select').material_select();
});
            