const fs = require('fs')

fs.readFile('day1.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }

    let count = 0
    for (var brackets of data) {
        if (brackets == '(') {
            count = count + 1
        }
        else if (brackets == ")") {
            count = count - 1
        }
    }
    console.log(count)
})
