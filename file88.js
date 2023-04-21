
function func6(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi! Thanks for calling me the first time!");
            counter++;
        }
        else{
            console.log("I have already been called once!");
        }
    }
}

const myFunc6 = func6();
myFunc6();
myFunc6();
