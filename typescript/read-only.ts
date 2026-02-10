interface Address {
    street: string;
    city: string;
    country: string;
}
interface Human {
    readonly name: string;
    age: number;
    readonly address: Address;
}
let person: Human = {
    name: "John",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
console.log('Person:', person);
//person.name = "Wick";
person.age = 26;
/*
person.address ={
    street: "456 Elm St",
    city: "Othertown",
    country: "USA"  
}*/
person.address.city = "Newcity";
console.log('Updated Person:', person);