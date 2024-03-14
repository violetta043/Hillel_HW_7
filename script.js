// Ф-ція яка не модифікує початковий масив 

// function removeElement(array, item) {
//     return array.filter(num => num !== item);
      
// }
// const array = [1, 2, 3, 4, 5, 6, 7];
// let newArray = removeElement(array, 5);
// console.log(newArray);



//Ф-ція яка модифікує початковий масив 
function removeElement(array, item) {
    const index = array.indexOf(item); 
    if(index !== -1) {
        array.splice(index, 1); 
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

