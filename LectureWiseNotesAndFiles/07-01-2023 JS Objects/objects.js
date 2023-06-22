const object = {
    rocket: '🚀',
    home: '🏡'
}

// string, number, bigint, boolean, null, undefined, symbol

const obj1 = {
    rocket: '🚀',
    fuel: 2,
    config:{
        name: 'mars',
    }
}

obj1.fuel = 100;
obj1['year'] = 2000;

// Part 2
const obj2 = new Object(); // Constructor
obj2.redbook = '📕';
// obj2.1bluebook = '📘';
obj2.myValue = '1 blue book'

console.log(obj2);

// Part 3

const powers = {
    fly: true,
    coordinate: Math.random() + 2
}

const obj3 = Object.create(powers);
console.log(obj3);
console.log(obj3.coordinate);
console.log(Object.getPrototypeOf(obj3));

// Part 4
const obj4 = Object.create({});
obj4.name = 'jay';
Object.defineProperty(obj4, 'book', {
    // icon:'📘', 
    get: () => '📘', // Use this instead
    enumerable: true,
})

console.log(obj4);
console.log(obj4.book);
console.log(Object.getPrototypeOf(obj4));

for(k in obj4){
    console.log("value is", k);
}

// Part 5
const obj5 = {
    comics: 'marvel',
    pen: '',
    printComic: function(){
        this.pen+='🖋️';
        console.log(this);
        return this;
    },
    printAComic: () => {
        // this.pen+='🖋️';
        console.log(this);
    }
}

console.log(obj5.printComic());
console.log(obj5.printAComic());

console.log(obj5.printComic().printComic().printComic());