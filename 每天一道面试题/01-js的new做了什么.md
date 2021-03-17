# js的new做了什么

function Func(){}
var func = new Func;

1、首先创建了一个新对象（这个对象的类型是Object）
var obj = {};
2、设置原型链: 将新对象的constructor属性设置为构造函数信息，设置新对象的__proto__属性指向构造函数的prototype对象
obj.__proto__ =  Func.prototype;
3、让Func中的this指向obj：让构造函数的this指向新的对象并执行Func的函数体
var result = Func.call(obj);
4、判断Func的返回值类型，将初始化完毕的新对象地址，保存到等号左边的变量中
if (typeof(result) =="object"){
  func = result;
} else {
  func=obj;
}