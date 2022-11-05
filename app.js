const rect = require('./rectangle')

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`)

//next lines only necessary if using the export in shorthand to define methods for perimeter and area. when we made the entire export have a function value we included the error check within it in the module
    // if (l <= 0 || w <= 0) {
    //     console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`)

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message)
        } else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`)
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`)
        }
    })
    console.log('This statement is logged after the call to rect()')
}

solveRect(2, 4)
solveRect(3, 5)
solveRect(0, 5)
solveRect(5, -3)