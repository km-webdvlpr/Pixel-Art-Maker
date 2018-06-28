// 26/06/2018
// Udacity Front End Challlenge Final Project AFRICA



function makeGrid(width, height) {
	let pixelCanvas, grid;
	pixelCanvas = $('#pixel_canvas');
	if (pixelCanvas.children().length) {
		pixelCanvas.empty();
	}
	for(let i = 0; i < height; i++) {
		grid += "<tr>";
		for (let j = 0; j < width; j++) {
			grid += "<td></td>";
		}
		grid += "</tr>";
	}
	pixelCanvas.html(grid);
	pixelCanvas.css("background-color", "#f4d9d9");
};

$(document).ready(function(){
	$('#submit-btn').click(function(evt) {
		let height, width;
		width = $('#input_width').val();
		height = $('#input_height').val();
		evt.preventDefault();
		makeGrid(width, height);
	});

	$('#pixel_canvas').click(function(evt) {
		let color = $('#colorPicker').val();
		$(evt.target).css('background-color', color);
	});
});









