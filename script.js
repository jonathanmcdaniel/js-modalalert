function showAlert(title, body, button, form, numberOfFields){
    var alertTitle = document.getElementById('alerttitle');
    var alertBody = document.getElementById('alertbody');
    var alertButton = document.getElementById('closebutton');
    alertTitle.innerHTML = title;
    if(form == 0){
        alertBody.innerHTML = body;
    }else{
        var formString = '';
        for(var i = 0; i < numberOfFields; i++){
            formString = formString + '<input type="text" size="30" id="alertForm' +i +'"><br />';
        }
        alertBody.innerHTML = formString + body;
    }
    alertButton.innerHTML = button;
    document.getElementById('acontainer').style.visibility = 'visible';
}
function closeAlert(){
    document.getElementById('acontainer').style.visibility = 'hidden';
}