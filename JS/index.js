function calculateBMI() {
	// Get the values of weight and height
	let weight = document.getElementById("weight").value;
	let height = document.getElementById("height").value;

	// Calculate the BMI
	let bmi = weight / ((height/100) * (height/100));

	// Round the BMI to two decimal places
	bmi = bmi.toFixed(2);

	// Display the result
	document.getElementById("result").innerHTML = bmi;
}