const inp1 = document.getElementById("inp1")
const inp2 = document.getElementById("inp2")
const inp3 = document.getElementById("inp3")
const inp4 = document.getElementById("inp4")
const inp5 = document.getElementById("inp5")
const inp6 = document.getElementById("inp6")
const button1 = document.getElementById("but1")
const button2 = document.getElementById("but2")
const button3 = document.getElementById("but3")
const button4 = document.getElementById("but4")


button1.addEventListener("click", function(){
    let inp11 = inp1.value
    let inp22 = inp2.value
    let inp33 = inp3.value

    function traingleArea1() {
        return inp11[0]+inp22[0]+inp33[0]
    }
    
    alert(traingleArea1());
})

button2.addEventListener("click", function(){
    let inp44 = inp4.value
    let rrr = inp44.length
    console.log(rrr);
    alert(rrr)

    
})

// 1
// button3.addEventListener("click", function(){
    // let inp55 = inp5.value
    // let rrrr = inp55.prototype.reverse()
    // console.log(rrrr);
// 
    // 
// })


button4.addEventListener("click", function(){
let inp66 = inp6.value
let n1 = /(?=.*[0-9])/

let te1 = inp66.search(n1)

console.log(te1);

    if(te1 == 0){
        alert("yes")
    } else{
        alert("no")
    }
    

    
})