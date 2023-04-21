
// callbacks, callback hell, pyramid of doom
// asynchronous programming

// we want first to change the text of the heading1 to 
// "Heading 1" and then change the color of the heading1 
// to "violet" after 1 second, after that to change the text 
// of the heading2 to "Heading 2" and then change the color of 
// the heading2 to "purple" after 3 seconds, and so on

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');
const heading8 = document.querySelector('.heading8');
const heading9 = document.querySelector('.heading9');
const heading10 = document.querySelector('.heading10');

/*

setTimeout(()=>{
    heading1.textContent = "Heading 1";
    heading1.style.color = "violet";
}, 1000)

setTimeout(()=>{
    heading2.textContent = "Heading 2";
    heading2.style.color = "purple";
}, 3000)

*/

// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown

/*
// callback hell

setTimeout(()=>{
    heading1.textContent = "Heading1";
    heading1.style.color = "violet";
    setTimeout(()=>{
        heading2.textContent = "Heading2";
        heading2.style.color = "purple";
        setTimeout(()=>{
            heading3.textContent = "Heading3";
            heading3.style.color = "red";
            setTimeout(()=>{
                heading4.textContent = "Heading4";
                heading4.style.color = "pink";
                setTimeout(()=>{
                    heading5.textContent = "Heading5";
                    heading5.style.color = "green";
                    setTimeout(()=>{
                        heading6.textContent = "Heading6";
                        heading6.style.color = "blue";
                        setTimeout(()=>{
                            heading7.textContent = "Heading7";
                            heading7.style.color = "brown";
                        }, 1000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 2000);
    }, 2000);
}, 1000);

*/

// promises help us to avoid this nested structure


function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback){
                onSuccessCallback();
            };
        } else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    }, time)
}

// Pyramid of doom

changeText(heading1, "one", "green", 1000, ()=>{
    changeText(heading2, "two", "purple", 2000, ()=>{
        changeText(heading3, "three", "red", 1000, ()=>{
            changeText(heading4, "four", "pink", 1000, ()=>{
                changeText(heading5, "five", "green", 2000, ()=>{
                    changeText(heading6, "six", "blue", 1000, ()=>{
                        changeText(heading7, "seven", "brown", 1000, ()=>{
                            changeText(heading8, "eight", "cyan", 1000, ()=>{
                                changeText(heading9, "nine", "#cda562", 1000, ()=>{
                                    changeText(heading10, "ten", "#dca652", 1000, ()=>{
                                    
                                    }, ()=>{
                                        console.log("Heading9 doesn't exist")
                                    });
                                }, ()=>{
                                    console.log("Heading9 doesn't exist")
                                });
                            }, ()=>{
                                console.log("Heading8 doesn't exist")
                            });
                        }, ()=>{
                            console.log("Heading7 doesn't exist")
                        });
                    }, ()=>{
                        console.log("Heading6 doesn't exist")
                    });
                }, ()=>{
                    console.log("Heading5 doesn't exist")
                });
            }, ()=>{
                console.log("Heading4 doesn't exist")
            });
        }, ()=>{
            console.log("Heading3 doesn't exist")
        });
    }, ()=>{
        console.log("Heading2 doesn't exist")
    });
}, ()=>{
    console.log("Heading1 doesn't exist")
});