function showInput() {
    document.getElementById('display').innerHTML = "Thank You " +
                document.getElementById("user_input").value;
}

function myfunction(){
    document.getElementById("user_input").style.border = "solid black 1px";

    var name=document.getElementById("user_input");
    if(name.value.length<3)
    {
        name.style.border="3px red solid";
        document.getElementById("err").style.display="inline-block";
    }
    else
    {
        name.style.border="solid 1px blue";
        document.getElementById("err").style.display="none";
    }
    

}

function validate_password() {
 
    var pass = document.getElementById('pass').value;
    var confirm_pass = document.getElementById('confirm_pass').value;
    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
          = 'Use same password';
        document.getElementById('create').disabled = true;
        document.getElementById('create').style.opacity = (0.4);
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            'password and repeat password should be the same';
        document.getElementById('create').disabled = false;
        document.getElementById('create').style.opacity = (1);
    }
}

function wrong_pass_alert() {
    if (document.getElementById('pass').value != "" &&
        document.getElementById('confirm_pass').value != "") {
        alert("Your response is submitted");
    } else {
        alert("Please fill all the fields");
    }
}