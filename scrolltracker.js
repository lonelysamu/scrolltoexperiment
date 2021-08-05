
let current = 0;
let previous = 0;
let currentsection = 0;

document.addEventListener('wheel', (e) => {

    current = getYPosition();
    numberofsection = document.querySelectorAll(".section").length - 1 ;
    heightofsection = window.innerHeight;

    quadrantsize = 100/numberofsection;

    for(i=0; i<=numberofsection;i++){
        if((((quadrantsize*i)+(quadrantsize/2))-current) >= 0) {
            currentsection =  i;
            break
        }
    }

    if(current > previous){
        gotonextsection();
    }
    else if ( previous > current){
        gotoprevioussection();
    }

    previous = current;
})

function getYPosition() {
    let fullheight = document.documentElement.scrollHeight;
    let top = window.pageYOffset || document.documentElement.scrollTop;
    let currentpos = (top / (fullheight - (window.innerHeight))) * 100;
    return currentpos;
}

function gotonextsection(){
    nextsection = (currentsection + 1)* window.innerHeight;
    window.scrollTo(0,nextsection);
}

function gotoprevioussection(){
    nextsection = (currentsection - 1)* window.innerHeight;
    window.scrollTo(0,nextsection);
}