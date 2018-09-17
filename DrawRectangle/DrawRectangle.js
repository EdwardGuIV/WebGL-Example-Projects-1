//DrawRectangle.js
function main() {
	//Retrieve <canvas> element
	var canvas = document.getElementById('example');
	if(!canvas) {
		console.log('Failed to retrieve the <canvas> element');
		return;
	}
	//Get the rendering conntext for 2DCG
	var ctx = canvas.getContext('2d');
	
	//Draw a blue rectangle
	ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; //Set blue color
	ctx.fillRect(120, 10, 150, 150); //Fill rectangle with the color
}
