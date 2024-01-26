var color = ['red','cyan','pink','black','green','yellow','blue','lemon','brown','purple','voilet']

var index =0;

var isTringle = false;

let cColor = document.getElementById("change-color");
let cShape = document.getElementById("change-shape");

cColor.addEventListener("click",chnageColor);
cShape.addEventListener("click",chnageShape);

function chnageColor(){
    if(index == color.length){
        index= 0;
    }
    document.getElementById("circle").style.backgroundColor=color[index];
    index++;

}

function chnageShape(){
    if(!isTringle){
        var i = document.getElementsByClassName("inner")[0];
        i.className = "tringle-bottom-left";
        isTringle = true;
    }else{
        var i =document.getElementsByClassName("tringle-bottom-left")[0];
        i.className = "inner"
        isTringle = false;
    }

}