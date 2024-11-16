

var usedNumber = null;


function getRandumNum(){
    var randNum;
    do{

        randNum = Math.floor(Math.random() * 5);

    }while(usedNumber == randNum)
    
     usedNumber = randNum;

     return randNum;

}

function display (){


    var randNum = getRandumNum() ; 
    console.log(randNum);
    

    var container = ' ';
    if( randNum == 0){
        container = `
            <p class="text-center">“So many books, so little time.” <br /> ― Frank Zappa</p>
        `
    }else if(randNum == 1){
        container = `
            <p class="text-center">“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br /> ― Albert Einstein</p>
        `
    }else if(randNum == 2){
        container = `
        <p class="text-center">“A room without books is like a body without a soul.” <br /> ― Marcus Tullius Cicero</p>
        `
    }else if(randNum == 3){
        container = `
        <p class="text-center">“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br /> ― Bernard M. Baruch</p>
        `
    }else if(randNum == 4){
        container = `
        <p class="text-center">“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” <br /> ― Dr. Seuss</p>
        `
    }
    
    document.getElementById("contentQuote").innerHTML = container;
    
}