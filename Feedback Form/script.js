function PrintData(){

var name = document.getElementById('fname').value;
console.log("Name: "+ name);

var data = document.getElementById('fdate').value;
console.log("date: " + data)

var title = document.getElementById('ftitle').value;
console.log("Feedback Title: " + title)

var msg = document.getElementById('msg').value;
console.log("Message Box: " + msg)

var java = document.getElementById('language1');
var python = document.getElementById('language2');

if (java.checked == true && python.checked == true){  
    var java = document.getElementById('language1').value;
    var python=document.getElementById('language2').value;
    console.log("programming language: "+java+python);
}
else if(java.checked == true){
    var java = document.getElementById('language1').value;
    console.log("programming language: "+java);
}
else if(python.checked == true){
    var python = document.getElementById('language2').value;
    console.log("programming language: "+python);
}

if(document.getElementById('male').checked) {   
    var male = document.getElementById('male').name;  
    console.log("Gender: "+ male);    
}
else{
    var female = document.getElementById('female').name;  
    console.log("Gender: "+ female);    
}

}
