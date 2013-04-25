function showAlert(title, body, button){
    var alertTitle = document.getElementById('alerttitle');
    var alertBody = document.getElementById('alertbody');
    var alertButton = document.getElementById('closebutton');
    alertTitle.innerHTML = title;
    alertBody.innerHTML = body;
    alertButton.innerHTML = button;
    document.getElementById('acontainer').style.visibility = 'visible';
}
function hideAlert(){
    document.getElementById('acontainer').style.visibility = 'hidden';
}