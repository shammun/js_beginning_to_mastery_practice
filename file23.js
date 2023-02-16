// returns the index at which the target is found
// if the target is not found, return -1
function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray, 4);
console.log(ans);
console.log(findTarget(myArray, 3)); 