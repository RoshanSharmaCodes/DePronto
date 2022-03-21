var data = [
	{id:8,name:"Roshan"},
	{id:3,name:"Vikas"},
	{id:2,name:"Kanak"},
	{id:4,name:"Monika"},
	{id:5,name:"Dhruti"},
	{id:6,name:"Sugam"},
	{id:7,name:"Geekster"},
	{id:1,name:"Mohit"}
]

function printData(data){
	var table = document.getElementById("table").getElementsByTagName('tbody')[0];
	table.innerHTML = "";
	for(var i=0;i<data.length;i++){
		var name = data[i].name;
		var id = data[i].id;
		var newRow = table.insertRow();
		var idCell = newRow.insertCell();
		var newCell = newRow.insertCell();
		var text = document.createTextNode(name);
		var id = document.createTextNode(id);
		idCell.appendChild(id);
		newCell.appendChild(text);
	}
}

function sortById(){
	data.sort((a,b)=>{
		return a.id - b.id
	});
	printData(data);
}

function sortByName(){
	function compare( a, b ) {
	  	if ( a.name < b.name ){
    		return -1;
  		}
  		if ( a.name > b.name ){
    		return 1;
  		}
  		return 0;
	}
	data.sort(compare);
	printData(data);
}


printData(data);