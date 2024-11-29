const array1 = [2,99,'33','Name']
const array2 = [99,2,'Name','33']


const isEqual = (arr1, arr2) => {
    const sortedArray1=arr1.sort()
    const sortedArray2=arr2.sort()
    const equal = arr1.length===arr2.length && arr1.every((value,index)=> value === arr2[index])
    return equal
}

console.log(isEqual(array1,array2))