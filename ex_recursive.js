const func = (num) => {
    if(num === 0) return
    console.log(num)
    return func(--num);
}
func(10)
array1.map(function(item){return item*2});