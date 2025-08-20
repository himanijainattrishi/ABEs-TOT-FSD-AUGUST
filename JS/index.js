console.log("hi javascript")
var user={
    name:'abc',
    rollno:23,
// object
abc()
{
console.log(this.name)
console.log(this.rollno)
}}

let admin=user
user=null
admin.abc()
console.log(admin.rollno)
