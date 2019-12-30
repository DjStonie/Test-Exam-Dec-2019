module.exports = { PascalTriangle, ValidInput, addRow };


function PascalTriangle(numRows) {

	if(!ValidInput(numRows)) {
		return 0;
	}
	let triangle = [[1], [1,1]];
	
	if(numRows === 0) {
		  return[];
	}

    if(numRows === 1) {
      return[[1]];
    }
	
	if (numRows === 2) {
      return[[1],[1, 1]];
	} else {
      for(let i = 2; i < numRows; i++) {
		addRow(triangle);
		}	
	}

	return triangle;
}
  
function addRow(triangle) {

	let previous = triangle[triangle.length - 1];
	let newRow = [1];

	for(let i = 0; i < previous.length - 1; i++) {
		let current = previous[i];
		let next = previous[i+1];
		newRow.push(current + next);
	}

	newRow.push(1);

	return triangle.push(newRow);
}

function ValidInput(input) {

	if(parseInt(input) === NaN) {
		return false;
	} else {
		return input >= 0 && input <= 10
	}	
}