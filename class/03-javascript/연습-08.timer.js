// let time = 10
// // undefined
// setInterval(function() {
//     if(time >= 0) {
//         console.log(time)
//         time -= 1    
//     }    
// },1000)

let time = 180
// undefined

setInterval(function() {
    
    if(time >= 0) {
        const min = Math.floor( time / 60 )
        const sec = String(time % 60).padStart(2,"0")
        console.log(min + ":" + sec)
        time = time - 1
    }
    
},1000)