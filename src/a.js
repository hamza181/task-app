let var1 = 'Ameer'
let obj = {
    name: 'Hamza',
    age: 22
}

const fun1 = (a, b) => {
    console.log(var1);
    console.log(a);
    console.log(b.age);

    return c => {
        console.log(c);
    }
}

fun1(var1, obj);