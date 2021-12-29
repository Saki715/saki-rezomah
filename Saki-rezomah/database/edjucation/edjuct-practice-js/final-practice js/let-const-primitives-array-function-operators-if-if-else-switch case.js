let name="mehdi saki";
    name="learning java script";
let x=10;let y=20;	let sum=x+y;	
document.write(name);
document.write("<br>sum = ",sum);
document.write("<br> ",`primitives value type:<br>
//string<br>
//number<br>
//boolean<br>
//underfiend<br>
//null ----> object<br>
`);
name="test";
let age=27;
let admin=true;
let person={
name:"test",
age:27,
admin:true,
}
document.write(person);
console.log(person);
let users=["mohmad","reza","jafar"]
document.write("<br>",users);
console.log("<br>",users);
document.write("<br><BR><BR><BR>",users[1]);
document.write("<br>",users[0]);
document.write("<br>",users[2]);
document.write("<br>",users[3]);
document.write("<br><BR><BR><BR>","function");
function namefunction(){//spase()this is a function used
	document.write("<br><BR>","learning function at javascript");
}
namefunction();/*space()this is a function used
//description at example
					function namefunction(name1){
					document.write("<br><BR>","learning function at javascript-------"+name1);
				}
					namefunction("ali");
*/
function namefunction(name1){
	document.write("<br><BR>","learning function at javascript-------"+name1);
}
namefunction("ali");
//******
function squre(number){
	let result=number*number;
	return result
}
let result=squre(4);
document.write("<BR>number*number----> result =",result);
document.write(`<BR>Computational operators<br>
//(%,/,*,-,+)
//(**,++,--)
//example--->(x++),(x--),(++x),(--x)
`);
document.write(`<BR>Appointment  operators<br>
//(+=,-=,/=,#=)
//example--->  x+=
//example--->  x-=
`);
document.write(`<BR>Comparative   operators<br>
//(>,>=,<=,<)---> relational
//equlity---->==,!=
//lose equlaty---> ===,==!
`);
document.write(`<BR>Triple    operators<br>
/*
let athenticated=true;
let boutton text=___?___:___;
athenticated===true?"dashbord":"login";
console.log(boutton text);
*/


`);
document.write(`<BR>Logical  operators<br>
//&&,||,!
`);
document.write(`<BR>Priority   operators<br>
//(*,/,+,-)Bracket operators take precedence
<BR>`);
let hour=10;
if( hour>5&&hour<12){
document.write("afternoon");
}else{document.write("m");}


