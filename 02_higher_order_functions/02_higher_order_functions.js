const repeat = (operation,num) => {
    console.log("num>>", num)
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
}
// repeat(()=>{}, 5)
module.exports = repeat