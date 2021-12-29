//--------------------------------------0:51:00object
/*let person={
name:"ali",
age:27,
admin:true,
}
console.log(person['name']);*/
//--------------------------------------0:59:35arrya

/*let user=["mohmad","reza"];
user[2]="hsan";
user[3]=null;
user[4]=false;
console.log(user);
user[2]="ahmad";
user[3]="a";
user[4]=true;*/

//-------------------------------------------01:07:00 function
/*function squre(number){
let resualt=number*number;
return resualt;
}
let resualt=squre(4);
console.log(resualt);*/

//---------------------------------------------------------------------------عملگرها
//---------------------------------------------0:1:18:00عملگرهای محاسباتی
/*let x=10;
let y=5;
console.log(x+y);*/

//-----------------------------------------------01:25:00عملگرهای انتصاب
/*let x='10';
console.log(x==10);*/
//----------------------------------------------- عملگرهای مقایسه  ای01:28:00
//relational <,>,<=,>=,
//equlity    ==,!=
//lose eqlity
//strict ===,!===
/*let x=1;
console.log(x===1);*/
//-----------------------------------------------01:36:00عملگرهای سه گانه
/*let athenticated=false;

let bottontext=athenticated===true?"dashboard":"login";
console.log(bottontext);*/
/*let x=5+(10**3);
console.log(x);*/
//-----------------------------------------------عملگرها منطقی01:38:00
//logical and  &&
//logical or   ||
//logical not  !
/*console.log(true&true&false);
let product=3;
let product price=1000;
let creadit=1200;*/   
//-----------------------------------------------عملگرهای منطقی  بر روی غیر بولی01:48:00
//false,undefiend,null,
//||,0||true
//false&&|
//-----------------------------------------------عملگرهای بیتی 01:55:00
//00000001=1
//000000010=2
//bitwise and :&
//console.log(1|2);
//-----------------------------------------------تقدم عملگرها 2:00:00
/*let x=5+3*10;
console.log(x);*/

//------------------------------------------------if...else-02:02:00
/*let hour=5;
if(hour>=1&&hour<12){
console.log('good morning');
}
else if(hour>=12&&hour<=18){
console.log('good evening');
}
else{
console.log('good night');
}*/

//------------------------------------------------switch case 02:09:00
//let role="admin";
/*switch(role){
	case"guest":
	console.log('guest user');
	break;
	case"admin":
	console.log('admin user');
	break;
default:
console.log('unknoun user');
}*/


/*if(role==='guest'){
console.log('guest user');
}
else if(role==='admin'){
console.log('admin user');
}
else{
console.log('unknoun user');
}*/
//--------------------------------------------for 02:14:00
						//for
						//while
						//do while
						//for..in
						//for..of
//---------------------------------------------for						
/*for(let i=0;i<5;i++){
console.log('neon');
console.log(i);
}*/

//for(/*let i=0;i<500;i++*/let i=5;i>=0;i--){
	//if(/*i%2==0*/i){
		/*console.log(i);
	}
}*/
//---------------------------------------------while02:21:00
/*let i=0;
while(i<5){
console.log(i);
i++;
}*/
//---------------------------------------------do while02:25:00
/*let i=0;
do{
	console.log(i);
	i++;
}
while(i<5);*/
//--------------------------------------------02:40:45 oop ->object orentied programming
/*let circle={
	radius:1,
	location:{
				x:1,
				y:1,
	},
	isvisible:true,
	draw:function(){console.log('draw')}
		  };
circle.draw();	*/

/*let a={
	b:1,
	c:{
		d:1,
		g:1,
	},
	isvisible:true,
	h:function(){console.log('این یک تست برنامه برای فرخوانی آبجکت توسط تابع است')}
};
a.h();*/
//----------------------------------------------02:40:45factory function
/*function creatcircle(radius){
			return{
				radius,
				draw(){console.log('bbggfff')}
			
			}
			}
let circle=creatcircle(1);			
console.log(circle);
let circle1=creatcircle(2);			
console.log(circle1);
let circle3=creatcircle(3);			
console.log(circle3);*/
//---------------------------------------------02:54:00counstructor function
/*function Circle(radius){
this.radius=radius;
this.draw=function(){console.log('draw')}
}
const circle = new Circle(3);	
console.log(circle);*/
//--------------------------------------------03:02:00 دینامیک بودن آبجکت 
/*const circle={ایراد دارم
	radius:1;
	}
	circle.color="red";
	circle.draw=function(){}
	
	console.log(circle);*/
//--------------------------------------------03:05:00property coustructor
//another.counstructor
//new string('a');
//new boolean ();
//new number(12..);



