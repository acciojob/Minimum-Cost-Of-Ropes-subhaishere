function calculateMinCost() {
  //your code here
	const div=document.getElementById("result");
  const input=document.getElementById("rope-lengths")
	let text=input.value;
	let array = text.split(",").map(function (num) {
		return parseInt(num);
	});
	let minCost=0;
	while(array.length>1){
	 array.sort((a, b) => a - b);
		//console.log(array);
		let sum=array.shift()+array.shift();
		minCost+=sum
		array.push(sum);
	}
	console.log(minCost);
	div.innerText=minCost;
	//p.innerText="result: "+minCost;
	//div.appendChild(p);
}  