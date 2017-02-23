fs = require('fs')


/**
 * return an array from the input string
 * */
function parseToItem(input){
	//read headers
	console.log('input ' + input);
	var inputSplit = input.split(' ');
	console.log(inputSplit)
	var item = {};
	item.rows = inputSplit[0];
	item.columns = inputSplit[1];
	item.min = inputSplit[2];
	item.max = inputSplit[3];

	//read content
	var column = 0
	var rows = 0
	var list = inputSplit[4];
	var array = [];
	for(var i=0;i<item.columns,i++){
		var myLine = [];
		for(element in line.split('')){
			myLine.push(element);
		}
		column++
		array.push(myLine);
	}
	item.array = array;

	return item;
}


fs.readFile('small.in', 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	console.log(parseToItem(data))
});

