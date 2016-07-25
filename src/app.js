"use strict";

$(document).ready(function() {
	$('#button-div').hide();
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
	}

	if (selector === "Terminator") {
		currentRobot = new Terminator(jqID);
	}

	if (selector === "R2") {
		currentRobot = new R2(jqID);
	}

	if (selector === "Wall") {
		currentRobot = new Wall(jqID);
	}

	if (selector === "Walking") {
		currentRobot = new Walking(jqID);
	}

	if (selector === "Flying") {
		currentRobot = new Flying(jqID);
	}

	return currentRobot;
};


$('#maker').click(() => {

	if 	(	$('#robotOneName').val() === ""   ||
			$('#robotTwoName').val() === ""   ||
			$('#robotOneType').val() === null ||
			$('#robotTwoType').val() === null ){

			window.alert("Please fill in all of the blanks");

	} else {
		robotOne = filterRobot($("#robotOneType").val(), $("#robotOneName").val());
		robotTwo = filterRobot($("#robotTwoType").val(), $("#robotTwoName").val());
		Template(robotOne, $('#robotOneCard'));
		Template(robotTwo, $('#robotTwoCard'));
		$("#maker").hide();
		$("#main-banner").hide();
		$('#button-div').show();
	}
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
		}
		Template(robotOne, $('#robotOneCard'));
		Template(robotTwo, $('#robotTwoCard'));
	} else {
		attacker(robotTwo, robotOne);
		Sentence(robotTwo, robotOne);
		$("#robotOneCard").empty();
		$("#robotTwoCard").empty();
		if (robotOne.health <= 0) {
			robotOne.health = 0;
			Winner(robotTwo);
			$('#button-div').hide();
		}
		Template(robotOne, $('#robotOneCard'));
		Template(robotTwo, $('#robotTwoCard'));
	}
	count++;
});

$(document).ready(function() {
	$('select').material_select();
});
            