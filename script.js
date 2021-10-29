let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click',(event) => {
        buttonText = event.target.innerText;
        console.log("Button text is : ",buttonText);
        if(buttonText == "X"){
            buttonText = '*';
            display.value += buttonText;
        }
        else if(buttonText == "C"){
            screenValue = "";
            display.value = screenValue;
        }
        else if(buttonText == "="){
            display.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            display.value = screenValue;
        }
    })
}