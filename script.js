function showAlert(title, body, button, form){
    var alertTitle = document.getElementById('alerttitle');
    var alertBody = document.getElementById('alertbody');
    var alertButton = document.getElementById('closebutton');
    
    var buttonValue = new Array();
        buttonValue[0] = 'First Name';
        buttonValue[1] = 'Last Name';
        buttonValue[2] = '###-###-####'
    
    alertTitle.innerHTML = title;
    if(form == 0){
        alertBody.innerHTML = body;
    }else{
        var formString = '';
        for(var i = 0; i < buttonValue.length; i++){
            formString = formString + '<input type="text" size="30" id="alertForm' +i +'" placeholder="' +buttonValue[i] +'"><br />';
        }
        alertBody.innerHTML = formString + body;
    }
    alertButton.innerHTML = button;
    
    document.getElementById('acontainer').style.visibility = 'visible';
}
function closeAlert(){
    document.getElementById('acontainer').style.visibility = 'hidden';
}