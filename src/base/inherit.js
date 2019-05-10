/**
 * 继承方法命名空间
 * Inherit
 * @namespace
 */
var Inherit = {
  /**
   * 类式继承
   * class inheritance
   * @method
   * @param { function } SubClass 子类 subclass
   * @param { function } SuperClass 父类 superclass
   * @example
   * function Teacher (teach) {
   *  this.teach = teach
   * }
   * function Person () {
   *
   * }
   * classInherit(Teacher, Person) => Teacher.prototype is the instance of Person
   * Teacher.prototype.getTeach = function () {
   *  return this.teach
   * }
   * var t1 = new Teacher('math')
   * var t2 = new Teacher('English')
   * console.log(t1.getTeach(), t2.getTeach()) // math English
   * // 但是这种继承方式有一个缺点：就是改变Teacher.prototype对象的属性会影响到所有Teacher实例
   * // But the disadvantage is that modifying the property of Teacher.prototype will affect all instance of Teacher:
   * t1.prototype.getTeach = function () {
   *  return 'Be modified: ' + teach
   * }
   * console.log(t1.getTeach(), t2.getTeach()) // Be modified: math Be modified: English
   */
  classInherit: function (SubClass, SuperClass) {
    SubClass.prototype = new SuperClass()
  },
  /**
   * 构造函数继承
   * constructor inheritance
   * @method
   * @param { function } SubClass 子类 SubClass
   * @param { function } SuperClass 父类 SuperClass
   * @return { function } a new constructor to instantiate SubClass 经过封装的用于实例化子类的构造函数
   * @example
   * function Teacher (teach) {
   *  this.teach = teach
   * }
   * function Person (name, age) {
   *  this.name = name
   *  this.age = age
   * }
   * var TeacherCreator = Inherit.constructorInherit(Teacher, Person)
   * var t = new TeacherCreator(['math'], ['John', 26]) // subArgs: ['math'], supArgs: ['John', 26]
   * console.log(t instance of Teacher) // true
   * console.log(t.name, t.age) // John 26
   * // 这种方法的缺点是没有使用prototype对象，不能实现属性共享
   * // The disadvantage of this method is that prototype object is not used, so attribute sharing can not be realized.
   */
  constructorInherit: function (SubClass, SuperClass) {
    var SubClassCreator = function (subArgs, supArgs) {
      var subClass = new SubClass(...subArgs)
      SuperClass.apply(subClass, supArgs)
      return subClass
    }
    return SubClassCreator
  },
  /**
   * 组合式继承
   * combinatorial Inheritance
   * @method
   * @param { function } SubClass 子类 SubClass
   * @param { function } SuperClass 父类 SuperClass
   * @return { function } a new constructor to instantiate SubClass 经过封装的用于实例化子类的构造函数
   * @description
   * 这是同时使用classInherit和constructorInherit的继承方式，返回的结果和constructorInherit一样
   * This is an inheritance method using both classInherit and constructorInherit, which returns the same results as constructorInherit.
   */
  combineInherit: function (SubClass, SuperClass) {
    var SubClassCreator = this.constructorInherit(SubClass, SuperClass)
    this.classInherit(SubClass, SuperClass)
    return SubClassCreator
  },
  /**
   * 原型链继承
   * prototype chain inheritance
   * @method
   * @param { object } obj 被继承对象 the object to be inherited
   * @return { object } 原型对象为obj的对象 a object whose prototype is obj
   * @example
   * var Person = {
   *  name: 'Person',
   *  say: function () {
   *    console.log('Hello ' + this.name)
   *  }
   * }
   * var teacher = Inherit.ObjectInherit(Person)
   * teacher.name = 'Teacher'
   * teacher.say() // Hello Teacher
   */
  ObjectInherit: function (obj) {
    function F () { }
    F.prototype = obj
    return new F()
  },
  /**
   * 寄生组合式继承
   * parasitic combinatorial inheritance
   * @param { function } SubClass 子类 SubClass
   * @param { function } SuperClass 父类 SuperClass
   * @example
   * function Teacher (name) {
   *  this.name = name
   * }
   * function Person () {
   *
   * }
   * Person.prototype.getName = function() {
   *  return this.name
   * }
   * Inherit.prototypeInherit(Teacher, Person)
   * var t = new Teacher('John')
   * t.getName() => 'John'
   */
  prototypeInherit: function (SubClass, SuperClass) {
    var p = this.ObjectInherit(SuperClass.prototype)
    p.constructor = SubClass
    SubClass.prototype = p
  },
  /**
   * 继承方法 - 使用类型选择Inherit中的继承方法
   * Inherit function - call the Inherit methods by type
   * @method
   * @param { string } type 继承类型 Inherit type
   * @return { function | object | undefined }
   * @example
   * Inherit.inherit('combine', Teacher, Person) => call Inherit.combineInherit()
   * Inherit.inherit('prototype', Teacher, Person) => call Inherit.prototypeInherit()
   */
  inherit: function (type) {
    var method = this[type.toLowerCase() + 'Inherit']
    if (method) {
      return Inherit.apply(Inherit, [].slice.call(arguments, 1))
    }
  }
}

module.exports = Inherit
