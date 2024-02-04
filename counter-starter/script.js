function add(step) {
    let numberElement = document.getElementById('number');
    let number = numberElement.innerText;
    number =parseInt(number)+step;
    numberElement.innerText=number;
    console.log(number);
}

function subtract(step) {
    let numberElement = document.getElementById('number');
    let number=numberElement.innerText;
    number=parseInt(number)-step;
    numberElement.innerText=number;
    console.log(number);
    }

function reset() {
    let numberElement = document.getElementById('number');
    numberElement.innerText=0;
    console.log(0);
    }
