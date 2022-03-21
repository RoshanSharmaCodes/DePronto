function validateForm(){
	let name = document.querySelector("#name").value;
	console.log(name);
	alert(name);
}

var pointer=0;

function inc(){
	if(pointer==3){
		pointer=pointer
	}else{
			pointer++;	
	}
	SetImage(pointer);
}

function dec(){
	if(pointer==0){
		pointer = pointer;
	}else{
		pointer--;	
	}
	SetImage(pointer);
}

function SetImage(pointer){
	var img = document.querySelector("#mainimage");
	img.src = pointer+".jpg";
}