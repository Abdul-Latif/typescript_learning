// Generics

function returnType<GenericType>(val: GenericType): GenericType {
    return val;
}


console.log(returnType<number>(10));
console.log(returnType<string>("dfdf"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3]));
