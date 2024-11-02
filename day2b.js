const fs = require('fs')

fs.readFile('day2.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }

    const arr = data.split("\n")
    let sum = 0
    for (let dimensions of arr.slice(0, arr.length - 1)) {
        const foo = dimensions.split("x")
        const dim = foo.map(convertToInt)
        let bar = dim[0] * dim[1] * dim[2] + 2 * Math.min(dim[0] + dim[1], dim[1] + dim[2], dim[0] + dim[2])
        sum = sum + bar
    }
    console.log(sum)
})

function convertToInt(num) {
    return parseInt(num)
}
