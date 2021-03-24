# 题目 下面代码怎么能进入if里面
if (a === 1 && a === 2 && a === 3) {
  console.log("you win");
}
# 答案
let val = 1;
Object.defineProperty(window, "a", {
  get() {
    return val++;
  },
});
# 知识点
Object.defineProperty(obj, prop, descriptor)的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性
参数 obj:要定义属性的对象。prop:要定义或修改的属性的名称或Symbol。descriptor:要定义或修改的属性描述符
给对象的属性添加特性描述，目前提供两种形式：数据描述和存取器描述。
  数据描述
    value: any; 属性对应的值,可以使任意类型的值，默认为undefined
    writable: boolean; 属性的值是否可以被重写。设置为true可以被重写；设置为false，不能被重写。默认为false。   
    enumerable: boolean; 此属性是否可以被枚举（使用for...in或Object.keys()）。设置为true可以被枚举；设置为false，不能被枚举。默认为false。
    configurable: boolean; 是否可以删除目标属性或是否可以再次修改属性的特性（writable, configurable, enumerable）。设置为true可以被删除或可以重新设置特性；设置为false，不能被可以被删除或不可以重新设置特性。默认为false。这个属性起到两个作用：目标属性是否可以使用delete删除,目标属性是否可以再次设置特性;
  存取器描述 当使用了getter或setter方法，不允许使用writable和value这两个属性
    get:function (){} | undefined, getter 是一种获得属性值的方法
    set:function (value){} | undefined setter是一种设置属性值的方法。
    configurable: true | false
    enumerable: true | false
    当设置或获取对象的某个属性的值的时候，可以提供getter/setter方法。
    get或set不是必须成对出现，任写其一就可以。如果不设置方法，则get和set的默认值为undefined
兼容情况
  在ie8下只能在DOM对象上使用，尝试在原生的对象使用 Object.defineProperty()会报错。

Object.defineProperties（Object.definePropert一次性设置多个属性用到）本质上定义了obj 对象上props的可枚举属性相对应的所有属性。

Proxy代理器； 对于可以设置、但没有设置拦截的操作，则直接落在目标对象上，按照原先的方式产生结果。
  Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
  Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
  ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。
  var proxy = new Proxy(target, handler);
  Proxy对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。
  例：var proxy = new Proxy({}, {
      get: function(target, propKey) {
        return 35;
      }
    });
    proxy.time // 35
    proxy.name // 35
    proxy.title // 35
  注意：要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。如果handler没有设置任何拦截，那就等同于直接通向原对象。
  下面是 Proxy 支持的拦截操作一览，一共 13 种。
    get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']
    set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
    has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
    deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
    ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
    getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
    defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
    preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
    getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
    isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
    setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
    apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
    construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
    具体的使用请参照：https://es6.ruanyifeng.com/#docs/proxy

vue3.0中的双向数据绑定方法
  vue3.0中用Proxy替换了Object.defineProperty
    在Vue中，Object.defineProperty无法监控到数组下标的变化，导致直接通过数组的下标给数组设置值，不能实时响应。
    Object.defineProperty只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。
    Proxy有以下两个优点：1.可以劫持整个对象，并返回一个新对象；2.有13种劫持操作；
