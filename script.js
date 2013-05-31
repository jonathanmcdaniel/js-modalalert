var buttonValue = new Array();
var alertInfo = new Array();
function showAlert(title, body, button, form, red, green, blue, alpha){
    var alertTitle = document.getElementById('alerttitle');
    var alertBody = document.getElementById('alertbody');
    var alertButton = document.getElementById('closebutton');
    
        buttonValue[0] = 'First Name';
        buttonValue[1] = 'Last Name';
        buttonValue[2] = 'email@email.com'
    
    alertTitle.innerHTML = title;
    if(form == 0){
        alertBody.innerHTML = body;
    }else{
        var formString = '';
        for(i = 0; i < buttonValue.length; i++){
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
function getAlertContents(){
    for(j = 0; j < buttonValue.length; j++){
        var el = document.getElementById('alertForm'+j).value;
        alertInfo.push(el);
    }
}