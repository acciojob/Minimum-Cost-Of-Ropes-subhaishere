function calculateMinCost() {
	let CONTAINER = document.getElementById('result');
	if (CONTAINER !== '') {
		return;
	}
  //your code here
	let str = document.getElementById('rope-lengths').value;
    let arr = str.split(',');
	let numArr = arr.map((ele) => {
		return parseInt(ele);
	})
	let cost = 0;
	while(numArr.length > 1){
		numArr.sort((a,b) => a-b);
		cost += (numArr[0]+numArr[1]);
		numArr.shift();
		numArr.shift();
		numArr.push(cost);
	} 
	
	CONTAINER.appendChild(cost);
	return cost;
}  