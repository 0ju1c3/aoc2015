const fs = require('fs')

fs.readFile('day3.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }

    const housesGone = new Set()
    let x = 0
    let y = 0
    housesGone.add(`${x},${y}`)
    for (let i = 0; i < data.length - 1; i++) {
        const house = data[i]
        if (house === '^') {
            y++
        }
        else if (house === 'v') {
            y--
        }
        else if (house === '>') {
            x++
        }
        else if (house === '<') {
            x--
        }
        housesGone.add(`${x},${y}`)
    }
    const uniqueHouses = housesGone.size
    console.log(uniqueHouses)
})
