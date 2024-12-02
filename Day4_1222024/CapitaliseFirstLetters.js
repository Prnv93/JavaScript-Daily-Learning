const capitaliseFirstLetter = input =>{
    const output =input.replace(input.charAt(0),input.charAt(0).toUpperCase())
    return output
}
console.log(capitaliseFirstLetter('poop'))

