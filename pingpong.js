const button1 = document.getElementById("b1")
const button2 = document.getElementById("b2")
const three = document.getElementById("three")

let y1 = 10
let balltop = 100
let ballleft = 200

let ballXSpeed = 3
let ballYSpeed = 3

button1.addEventListener("click", function(){
    // three.style.@keyframes="transform:translate(0%, 20%)"
    // three.style.@keyframes bu1{
    //    
    // }
    if(y1 == 180){
    y1 -= 10
    three.style.top=`${y1}px`
    }


     y1 += 10
     three.style.top=`${y1}px`
    // three.style.transform="translate(0px, 10px)"

})


button2.addEventListener("click", function(){
    // three.style.@keyframes="transform:translate(0%, 20%)"
    // three.style.@keyframes bu1{
    //    
    // }
    if(y1 == 0){
    y1 += 10
     three.style.top=`${y1}px`
        }


    y1 -= 10
    three.style.top=`${y1}px`

    
    
})


function moveBall(){
    if(balltop > 235){
        ballYSpeed = -ballYSpeed
    } else if(balltop < 0){
        ballYSpeed = -ballYSpeed

    } 


    if(ballleft > 485){
        ballXSpeed = -ballXSpeed
    } 

    
    if(ballleft < 0 && balltop >= y1){
        ballXSpeed = -ballXSpeed
        

    } 
    


    ballleft += ballXSpeed
    balltop += ballYSpeed

}

function update() {
    moveBall()

    document.getElementById("ball").style.top = balltop + "px"
    document.getElementById("ball").style.left = ballleft + "px"

    
}

function startGame() {
    setInterval(update, 1000 / 60)
}

startGame()