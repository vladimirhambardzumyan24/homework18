function rotates(arr,n){
    if(n===0){
        return
    }
    if(n>0){
        arr.push(arr[0])
        arr.shift()
        rotates(arr,n-1)
    }else if(n<0){
        arr.unshift(arr[arr.length-1])
        arr.pop()
        rotates(arr,n+1)
    }
    return arr
}
console.log(rotates(['a', 'b', 'c', 'd', 'e', 'f','g', 'h'], 3))