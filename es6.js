//* 箭头语法
// function square(){
//   let example=()=>{
//     let numbers=[];
//     for(let number of arguments){
//       numbers.push(number*number)
//     }
//     return numbers
//   }
//   return example()
// }
// console.log(...square(2,4,7.5,8,11.5,21));

// *class
// class SkinnedMesh extends THREE.Mesh{
//   constructor(geometry,materials){
//     super(geometry,materials);

//     this.idMatrix=SkinnedMesh.defaultMatrix();

//   }
//   update(camera){
//     super.update()
//   }
//   static defaultMatrix(){
//     return new THREE.Matrix4();
//   }
// }

// // 未命名/匿名类
// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// // output: "Rectangle"
// // 命名类
// let Rectangle3 = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle3.name);
// // 输出："Rectangle2"

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(this.name + ' makes a noise.');
//   }
// }

// class Lion extends Cat {
//   constructor(name){
//     // 如果子类中定义了构造函数，那么它必须先调用 super() 才能使用 this
//     super(name);
//   }
//   speak() {
//     // super 关键字用于调用对象的父对象上的函数。
//     super.speak();
//     console.log(this.name + ' roars.');
//   }
// }

// var a=new Lion('xx')
// a.speak()
//输出 xx makes a noise.
//    xx roars.

// *Template Strings
// console.log(`In ES5 '\n' is a line-feed.`);
// console.log(`In ES5 \n is a line-feed.`);
// console.log(String.raw`In ES5 '\n' is a line-feed.`);



// *Destructuring
// var [a,,b]=[1,2,3]
// a===1;
// b===3;

// var {a,b,c}={a:1,b:2,c:3}

// // Can be used in parameter position
// function g({name: x}) {
//   console.log(x);
// }
// g({name: 5})

// // Fail-soft destructuring
// var [a] = [];
// console.log(a === undefined); 

// // Fail-soft destructuring with defaults
// var [a = 1] = [];
// console.log(a === 1)

// // Destructuring + defaults arguments
// function r({x, y, w = 10, h = 10}) {
//   return x + y + w + h;
// }
// console.log(r({x:1, y:2})); 



// *Default + Rest + Spread
// function f(x, ...y) {
//   // y is an Array
//   console.log(y);//[ 'hello', true ]
//   return x * y.length;
// }
// console.log(f(3, "hello", true) == 6); 

// *set
// var s=new Set();
// s.add("hello").add("goodbye").add('hello')
// console.log(s.size===2); 
// console.log(s.has('hello')); 

// *Maps
// var m=new Map();
// m.set('hello',42);
// m.set('s',34);
// console.log(m.get('s')); 

// *Math + Number + String + Object APIs
// console.log(Number.isNaN('Nan'))
// console.log(Number.isNaN(NaN))

// "abcde".includes("cd") // true
// "abc".repeat(3) // "abcabcabc"

// Array.of(1)//[1] Similar to new Array(...), but new Array(...) without special one-arg behavior ;new Array(1)返回[empty]
// console.log([0,0,0].fill(7,1));//[0,7,7]

// ["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
// ["a", "b", "c"].keys() // iterator 0, 1, 2
// ["a", "b", "c"].values() // iterator "a", "b", "c"
//
