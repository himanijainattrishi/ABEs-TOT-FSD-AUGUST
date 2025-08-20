console.log("hi javascript")
// var user={
//     name:'abc',
//     rollno:23,
// // object
// abc()
// {
// console.log(this.name)
// console.log(this.rollno)
// }}

// let admin=user
// user=null
// admin.abc()
// console.log(admin.rollno)

// let user={
//     name:'abc'
// }
// let admin={
//     name:'admin'
// }
// function sayHi()
// {
//    console.log(this.name)
// }
// admin.abc=sayHi
// admin.abc()

let group={
    dep:'MCA',
    name:['abc','xyz','pp'],

    sayHi()
    {
        console.log(group.name[0]+group.dep)
    }
};
group.sayHi()