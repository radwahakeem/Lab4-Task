var output = document.getElementById("Answer");
function EnterNumber(num){
    output.value+=num;
}
function EnterOperator(operator){
    output.value+=operator;
}
function EnterEqual(){
    output.value=eval(output.value);
}
function EnterClear(){
    output.value="";
}