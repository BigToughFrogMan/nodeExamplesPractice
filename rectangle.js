//exports.perimeter = (x, y) => 2 * (x + y)
//exports.area = (x, y) => x * y
//exports.function is a shorthand for module.exports
// you can do that for defining a method on exports
//instead we will use the full module.exports to assign a full function as a value to the entire export instead of as a method to the export

module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`))
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        )
    }
}