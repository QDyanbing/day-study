# getter 和 setter
  getter和setter的作用
    JavaScript中的对象支持通过getter和setter设置伪属性，该伪属性具有普通属性的使用方式，可以读取其值或对其赋值，但是在读取其值或对其赋值时，其内部调用的是getter函数以及setter函数，getter函数和setter函数是伪属性对应的读、写方法，可以在这两个方法中实现相关逻辑从而精确地控制读写该伪属性的行为。
  JavaScript中有多种方式为对象添加伪属性。
    通过Object.prototype.__defineGetter__(prop, func) 和 Object.prototype.__defineSetter__(prop, fun)定义getter和setter
      prop: 一个字符串，表示指定的属性名。
      func: 一个函数，当 prop 属性的值被读取时自动被调用。
    在新对象初始化时定义getter和setter
      在新对象初始化时，可以通过get/set关键字为对象添加一个getter/setter，作为可读的伪属性。
    通过Object.defineProperty()和Object.defineProperties()定义getter和setter


