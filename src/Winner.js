"use strict";

let Winner = (attacker) => {
	$('<h1></h1>').text(attacker.name + " Wins").prependTo($("#battlefield"));
};

module.exports = Winner;