const btn = document.getElementById("button");

const randomColor = () => {
    let val = "012345678ABCDEF";
    let cons = "#";
    for(let i=0;i<6;i++){
        cons += val[Math.floor(Math.random()*16)];
    }
    return cons;
}

function changeBackgroundColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeBackgroundColor);