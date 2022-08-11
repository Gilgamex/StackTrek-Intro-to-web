
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let input = document.getElementById("input");
let inputValue = input.value;

plus.addEventListener('click', function (){
    inputValue ++;
    input.value = inputValue;
});

minus.addEventListener("click", function (){
    inputValue --;
    input.value = inputValue;
});

