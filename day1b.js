const fs = require('fs')

fs.readFile('day1.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }

    let count = 0
    for (var brackets in data) {
        if (data[brackets] == '(') {
            count = count + 1
        }
        else if (data[brackets] == ")") {
            count = count - 1
        }
        if (count == -1) {
            console.log(parseInt(brackets) + 1)
            break
        }
    }
})
