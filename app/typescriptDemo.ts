// class Student {
//     fullName: string;
//     constructor(public firstName, public middleInitial, public lastName) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = new Student("Jane", "M.", "User");

// console.log(greeter(user))
// document.body.innerHTML = greeter(user);
import { ScrollEventData, ScrollView } from 'tns-core-modules/ui/scroll-view'

export function onScroll(args: ScrollEventData){
    // const sv= args.object as ScrollView
    console.log(args.scrollY)
}
