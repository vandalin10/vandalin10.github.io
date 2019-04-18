function squareNum(){
    var num = document.getElementById('square-input').value;
    var result = num*num;
    console.log('The result of squaring the number ' + num + ' is ' + result);
    solution.innerText = 'The result of squaring the number ' + num + ' is ' + result;
    // return result;
}

var squareButton = document.getElementById('square-button');
squareButton.addEventListener('click', squareNum);


function halfNum(){
    var num = document.getElementById('half-input').value;
    var result = num/2;
    console.log('Half of ' + num + ' is ' + result);
    solution.innerText = 'Half of ' + num + ' is ' + result;
    // return result;
}

var halfButton = document.getElementById('half-button');
halfButton.addEventListener('click', halfNum);


function percentOf(){
    var num1 = document.getElementById('percent1-input').value;
    var num2 = document.getElementById('percent2-input').value;
    var result = num1/(num2*0.01) + '%';
    console.log(num1 + ' is ' + result + ' of ' + num2);
    solution.innerText = num1 + ' is ' + result + ' of ' + num2;
    // return result;
}

var percentButton = document.getElementById('percent-button');
percentButton.addEventListener('click', percentOf);


function areaOfCircle(){
    var r = document.getElementById('area-input').value;
    var result = Math.PI*r*r;
    console.log('The area for a circle with a radius of ' + r + ' is ' + result);
    solution.innerText = 'The area for a circle with a radius of ' + r + ' is ' + result;
    // return result;
}

var areaButton = document.getElementById('area-button');
areaButton.addEventListener('click', areaOfCircle);
