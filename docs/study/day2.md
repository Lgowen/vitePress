# js基础 #

**组合寄生式继承**

```js
// 父构造函数
function Father(name, year) {
    this.name = name
    this.year = year
}

// 父构造函数自己原型上的方法
Father.prototype.getName = function () {
    console.log(this.name)
}

// 子构造函数
function Son(name, year, habit) {
    Father.call(this, name, year)
    this.habit = habit
}

Son.prototype = Object.create(Father.prototype) // 子构造函数原型继承父构造函数原型（的副本），避免了创建不必要的属性
Son.prototype.constructor = Son // 保证Son构造出来的对象的构造器是Son

// 子构造函数自己原型上的方法
Son.prototype.getHabit = function () {
    console.log(this.habit)
}
```



**什么是闭包**

- 闭包一般指的是能够访问另一个函数作用域中变量的函数，创建闭包的方式一般是在一个函数内部再创建一个函数，则内部函数就能够访问到该作用域底下的变量
- 闭包一般用于创建私有变量，内部函数返回到外部时，是可以做到访问内部变量的，但不能够修改


**什么是原型、原型链**


- 在js中我们是用构造函数来创建一个对象的，每个构造函数都有一个prototype的值，这个值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法
- 当我们使用构造函数来新建一个对象后，这个对象内部有一个指针，指向其构造函数的prototype，我们称之为该对象的原型
- 在浏览器中我们可以通过__proto__来访问一个对象的原型，但这只是浏览器提供的
- 获取原型的方法：Object.getPrototypeOf(obj) obj.constructor.prototype
- 当我们想访问一个对象的属性时，如果在该对象上找不到该属性，则会去它的原型上寻找，看是否存在，若还是没有则会继续在其原型上寻找。这就形成了原型链，所有对象的原型链尽头都是Object.prototype

```js

function Person() {
    
}

const person = new Person()

person.constructor === Person
Object.getPrototypeOf(person) === Person.prototype
Person.prototype.constructor === Person
Person.prototype.prototype === Object.prototype
```



**常用正则表达式**


```js
// （1）匹配 16 进制颜色值
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

// （2）匹配日期，如 yyyy-mm-dd 格式
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// （3）匹配 qq 号
var regex = /^[1-9][0-9]{4,10}$/g;

// （4）手机号码正则
var regex = /^1[34578]\d{9}$/g;

// （5）用户名正则
var regex = /^[a-zA-Z\$][a-zA-Z0-9_\$]{4,16}$/;

```


**v8的垃圾回收机制**

- 新生代：对象的存活时间较短。新生对象或只经过一次垃圾回收的对象。
- 老生代：对象存活时间较长。经历过一次或多次垃圾回收的对象。


- 老生代:
- Mark-Sweep(标记清除)
- 标记: 遍历堆中所有对象，并对存活的对象进行标记
- 清除: 对未标记对象的空间进行回收
- 经过一次Mark-Sweep后，内存的空间将会变得不连续，这样会对后续内存分配造成问题

- Mark-Compact(标记整理)
- 标记: 遍历堆中所有对象，并对存活的对象进行标记
- 整理: 将存活的对象移动到一边，然后再清理端边界外的内存


- Incremental Marking（增量标记）
- 在新生代中，由于存活对象少，垃圾回收效率高，全停顿时间短，造成的影响小。但是老生代中，存活对象多，垃圾回收时间长，全停顿造成的影响大。为了减少全停顿的时间，V8对标记进行了优化，将一次停顿进行的标记过程，分成了很多小步。每执行完一小步就让应用逻辑执行一会儿，这样交替多次后完成标记。


- lazy sweeping（延迟清理）

- 发生在增量标记之后
- 堆确切地知道有多少空间能被释放
- 延迟清理是被允许的，因此页面的清理可以根据需要进行清理
- 当延迟清理完成后，增量标记将重新开始。