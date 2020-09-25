var students = ["Timmy","Vannesa","Arun","Allessa"];

var naughtyList = [];

//var badKid = students[0];

naughtyList.push(students[0]);
naughtyList.push(students[1]);
naughtyList.push(students[2]);

var index = naughtyList.indexOf("Timmy");
//if indexOf function does find the index it will return -1

console.log(naughtyList);

if(index > -1){
    naughtyList.splice(index+1,2);
}

console.log(naughtyList);