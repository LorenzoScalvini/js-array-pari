const array = [1, 3, 5, 2, 10, 6, 4, 9];
const arrayOfEven = [];
console.log(array);

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element % 2 === 0) {
        arrayOfEven.push(element);
        
    }
    
}
console.log(arrayOfEven);



