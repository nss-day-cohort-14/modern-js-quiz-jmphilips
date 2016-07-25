describe("The battling robots", function(){


	
	it("Should have a base prototype defined  named robot", function(){
		expect(Robot).toBeDefined();
	});

	it("Should have a function called attacker", function(){
		expect(attacker).toBeDefined();
	});

	it("Attacker should subtract the attack points from the health", function() {
		let Arnold = new Flying("Name");
		let Joshua = new R2("name");

		let healthCheck = Joshua.health;
		attacker(Arnold, Joshua);

		let isItTrue = (Joshua.heath > healthCheck);

		expect(isItTrue).toBe(true);

	});

});

