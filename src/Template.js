"use strict";

let Template = (character, card) => {
	$('<h3></h3>').text("Name: " + character.name).appendTo(card);
	$('<p></p>').text("Attack: " + character.attack).appendTo(card);
	$('<p></p>').text("Defense: " + character.defense).appendTo(card);
	$('<p></p>').text("Class: " + character.class).appendTo(card);
	$('<p></p>').text("Type: " + character.type).appendTo(card);
	$('<p></p>').text("Health: " + character.health).appendTo(card);
};

module.exports = Template;