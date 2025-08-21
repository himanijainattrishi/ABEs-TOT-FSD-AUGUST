// const user={
//     name:'xyz',
//     age:20,
//     phone:[1234,5678,4567]
// }
// console.log(user.phone)
// console.log(user.name,user.phone[1])

const car={
name:['xuv','exter'],
    engine:[
        'abc','xyz'
    ],

  
    type:['type1','type2'],

    
    power:['power1','power2']

    

}
console.log(car.name)
for(i in car.engine){
    console.log(car.engine[i])
}
car.name[0]='scorpio'
console.log(car.name)