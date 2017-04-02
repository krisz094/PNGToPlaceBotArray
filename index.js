const PNG = require('png-js');
const rgbHex = require('rgb-hex')
const fs = require('fs')

PNG.decode('marco.png', function (pixels) {
	const offsetX = 0
	const offsetY = 0
	const colors = {
		"ffffff": 0,
		"e4e4e4": 1,
		"888888": 2,
		"222222": 3,
		"ffa7d1": 4,
		"e50000": 5,
		"e59500": 6,
		"a06a42": 7,
		"e5d900": 8,
		"94e044": 9,
		"02be01": 10,
		"00d3dd": 11,
		"0083c7": 12,
		"0000ea": 13,
		"cf6ee4": 14,
		"820080": 15,
	}
	var botColors = []
	// pixels is a 1d array (in rgba order) of decoded pixel data
	for (let i = 0; i < pixels.length; i += 4) {
		var x = Math.floor((i / 4) / 43)
		var y = i / 4 - x * 43

		var [r, g, b] = [pixels[i], pixels[i + 1], pixels[i + 2]]
		var rgb = rgbHex(r, g, b)
		var colorId = colors[rgb]

		botColors.push([offsetX + x, offsetY + y, colorId])
		//console.log(`x:${x}, y:${y}`);
	}
	fs.writeFileSync('output.txt', JSON.stringify(botColors))
	console.log("Done!");
});