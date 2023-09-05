console.log("Hello World");
async function helloWorld() {
    return "hello";
}

type Mentor = "Raul" | "Lucas"
interface Person {
    name: string;
    age: number;
    mentor?: Mentor;
    pet?: boolean | string;
}

const lucas: Person = {
    name: "Lucas",
    age: 23,
    mentor: "Lucas",
    pet: true,
};

type People = Person[]

const people : People = [{age:23, name: "Karl"}, lucas]
people.forEach(person =>{
    const plus3=person.age+3;
    console.log('plus3 :>> ', plus3);
});

function multiply (x:number,y:number) {
    return x * y;
}
const res = multiply(1, 2);
console.log('res :>> ', res);