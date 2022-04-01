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


