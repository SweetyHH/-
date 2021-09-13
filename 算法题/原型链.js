class A { }
class B extends A { }

const a = new A()
const b = new B()

console.log(b.__proto__.__proto__)